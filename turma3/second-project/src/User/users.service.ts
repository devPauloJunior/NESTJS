import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-users.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({name, email, cpf, password}: CreateUserDTO) {
        return this.prisma.user_login.create({
            data: {
                name,
                email,
                cpf,
                password,
            }
        })
    }
}
