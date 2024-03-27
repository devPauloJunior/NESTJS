import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-users.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-users.dto";

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

    async list() {
        return this.prisma.user_login.findMany()
    }

    async show(id: number) {
        return this.prisma.user_login.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, data: UpdateUserDTO) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        return this.prisma.user_login.update({
            data,
            where: {
                id,
            }
        })
    }

    async updatePartial(id: number, {name, email, cpf, password}: UpdatePatchUserDTO) {
        
        const data: any = {}

        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        
        if (name) {
            data.name = name
        }

        if (email) {
            data.email = email
        }

        if (cpf) {
            data.cpf = cpf
        }

        if (password) {
            data.password = password
        }


        return this.prisma.user_login.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: number) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        return this.prisma.user_login.delete({
            where: {
                id
            }
        }) 
    }


}
