import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService) {}

    @Post()
    async create(@Body() {name, email, cpf: number, password}: CreateUserDto) {
        return this.userService.create({name, email, cpf:number, password})
    }
}
