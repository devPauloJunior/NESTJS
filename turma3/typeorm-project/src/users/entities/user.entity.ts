import { TaskEntity } from "src/tasks/entities/task.entity"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export enum UserRole {
    ADM = "administrador",
    USR = "usuário",
    TEC = "técnico",
}

export enum TypeUser {
    EST = "Estagiário",
    JNR = "Júnior",
    PLN = "Pleno",
    SNR = "Senior",
}

export enum Gender {
    MALE = 'masculino',
    FEMALE = 'feminino',
    OTHER = 'outro'
}

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    registration: number

    @Column({
        length: 120,
        nullable: false,
    })
    name: string

    @Column({
        length: 120,
        nullable: false,
    })
    email: string

    @Column({
        length: 120,
        nullable: false,
    })
    phone: string

    @Column({
        length: 120,
        nullable: false,
    })
    cpf: string

    @Column({
        nullable: false,
    })
    password: string

    @Column({
        type: "enum",
        enum: TypeUser,
        default: TypeUser.JNR,
        nullable: true,
    })
    typeUser: TypeUser

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @OneToMany(() => TaskEntity, (tasks) => tasks.user)
    tasks?: TaskEntity[]

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USR,
    })
    role: UserRole

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.FEMALE,
    })
    gender: Gender

}
