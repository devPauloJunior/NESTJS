import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { Gender, TypeUser, UserRole } from "../entities/user.entity";

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    phone: string

    @IsString()
    cpf: string

    @IsString()
    password: string

    @IsOptional()
    @IsEnum(TypeUser)
    typeUser: TypeUser

    @IsOptional()
    @IsEnum(UserRole)
    role: UserRole

    @IsOptional()
    @IsEnum(Gender)
    gender: Gender
    
}