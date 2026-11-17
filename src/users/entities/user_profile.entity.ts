import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('Users Profile')
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    age: number;

    @OneToOne(() => User, (u) => u.profile)
    user: User;
    
}
