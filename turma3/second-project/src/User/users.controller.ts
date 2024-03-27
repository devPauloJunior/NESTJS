import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-users.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-users.dto";
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
    // Criamos o CRUD
    @Post()
    create(@Body() data: CreateUserDTO) {
        return this.usersService.create(data)
    }

    @Get()
    async read() {
        return this.usersService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.show(id)
    }

    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.usersService.update(id, data)
    }
    
    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.usersService.updatePartial(id, data)
    }

    @Delete(':id')
    async  delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
