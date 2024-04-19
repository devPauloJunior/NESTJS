import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { LoginDto } from '../login/dto/login.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  
  @Get()
  async findByFilter(@Query() query): Promise<UserEntity | UserEntity[]> {
    // console.log(query.email)
    if (query.email) {
      return this.usersService.findEmail(query.email);
    } else if (query.name)  {
      return this.usersService.findName(query.name);
      } else {        
      return this.usersService.findAll()
    }
  }

  @Get('mytype')
  async findByType(@Query() query): Promise<UserEntity[]> {
    return this.usersService.findByType(query.typeUser);
  }

  @Get('mygender')
  async findByGender(@Query() query): Promise<UserEntity[]> {
    return this.usersService.findByGender(query.gender);
  }

  @Get('myrole')
  async findByRole(@Query() query): Promise<UserEntity[]> {
    return this.usersService.findByRole(query.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
