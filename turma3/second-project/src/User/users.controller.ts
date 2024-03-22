import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
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
        return { users:[] }
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return { user:{}, id }
    }

    @Put(':id')
    async update(@Body() { name, email, cpf, password }: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'PUT',
            name, email, cpf, password,
            id
        }
    }
    
    @Patch(':id')
    async updatePartial(@Body() { name, email, cpf,  password }: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'PATCH',
            name, email, cpf, password,
            id
        }
    }

    @Delete(':id')
    async  delete(@Param('id', ParseIntPipe) id: number) {
        return { id }
    }


}