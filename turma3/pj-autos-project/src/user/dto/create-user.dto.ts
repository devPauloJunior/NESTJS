import { Prisma } from "@prisma/client"
import { Type } from "class-transformer"
import { IsInt, IsString, IsStrongPassword, isNotEmpty } from "class-validator"

export class CreateUserDto implements Prisma.usersCreateInput {

    @IsString()
    name: string

    @IsString()
    email: string

    @IsInt({ message: 'O cpf não pode ser vazio' })
    @Type(() => Number)
    cpf: number

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 1,
    })
    password: string

}