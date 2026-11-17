import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./user_profile.entity";
import { Role } from "./roles.entity";
import { Order } from "src/orders/entities/order.entity";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToOne(() => Profile, (pf) => pf.user)
    @JoinColumn()
    profile: Profile;

    @ManyToMany(() => Role, (r) => r.user)
    @JoinTable()
    role: Role[];

    @OneToMany(() => Order, (o) => o.user)
    order: Order[];
}
