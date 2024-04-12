import { TaskEntity } from "src/tasks/entities/task.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
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
        length: 4,
        nullable: true,
    })
    typeUser: string

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @OneToMany(() => TaskEntity, (tasks) => tasks.user)
    tasks?: TaskEntity[]
}
