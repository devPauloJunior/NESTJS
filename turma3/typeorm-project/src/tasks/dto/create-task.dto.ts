import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { TaskEntity } from "../entities/task.entity";

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

    @IsOptional()
    @IsNumber()
    user?: TaskEntity

}
