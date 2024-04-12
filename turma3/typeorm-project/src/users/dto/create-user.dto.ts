import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";
import { Gender, UserRole } from "../entities/user.entity";

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
    @IsEnum(UserRole)
    role: UserRole

    @IsOptional()
    @IsEnum(Gender)
    gender: Gender
    
}