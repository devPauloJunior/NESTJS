import { Type } from "class-transformer"
import { IsNumber, IsString, IsStrongPassword, isNotEmpty } from "class-validator"

export class CreateUserDto {

    @IsString()
    name: string

    @IsString()
    email: string

    @IsNumber({}, { message: 'O cof não pode ser vazio' })
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