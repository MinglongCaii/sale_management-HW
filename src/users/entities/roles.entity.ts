import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    role_name: string;

    @ManyToMany(() => User, (u) => u.role)
    user: User[];
}
