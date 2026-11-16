import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Users Profile')
export class Profile {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    fullName: string;

    @Column()
    age: string;

    @OneToOne(() => User, (u) => u.profile)
    user: User;
}
