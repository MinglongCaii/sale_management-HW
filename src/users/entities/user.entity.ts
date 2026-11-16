import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./user_profile.entity";
import { Role } from "./roles.entity";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @OneToOne(() => Profile, (pf) => pf.user)
    @JoinColumn()
    profile: Profile;

    @ManyToMany(() => Role, (r) => r.user)
    @JoinTable()
    role: Role[];
}
