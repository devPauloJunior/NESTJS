import { UserEntity } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tasks'})
export class TaskEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({
        length: 120,
        nullable: false
    })
    title: string

    @Column({
        length: 300
    })
    description: string

    @Column()
    status: string

    @UpdateDateColumn()
    createdAt: string

    @Column({ nullable: false })
    difficult: number

    @ManyToOne(() => UserEntity, (user) => user.tasks)
    @JoinColumn({name: 'user_registration', referencedColumnName: 'registration'})
    user?: TaskEntity

}
