import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    title: string
    
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    status?: 'aberto' | 'encerrado'

    @IsOptional()
    @IsNumber()
    difficult?: number

}
