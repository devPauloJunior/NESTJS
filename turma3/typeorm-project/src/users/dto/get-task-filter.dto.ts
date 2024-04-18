import { TypeUser } from "../entities/user.entity"

export class GetUserFilterDto {
    typeUser: TypeUser
    search: string 
}