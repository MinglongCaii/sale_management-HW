import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./orderItem.entity";
import { User } from "src/users/entities/user.entity";

@Entity('orders')

export class Order {
    @PrimaryGeneratedColumn() id: number;
    @Column() name: string;
    @Column() userId: number;
    @Column({default: 0}) totalPrice: number;

    @OneToMany(() => OrderItem,(uo) => uo.order)
    orderItem: OrderItem[];
    
    @ManyToOne(() => User,(u) => u.order, {nullable: false, onDelete: 'CASCADE',})
    @JoinColumn({name: 'userId'})
    user: User;
}
