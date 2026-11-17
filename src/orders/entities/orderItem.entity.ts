import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "src/products/entities/product.entity";

@Entity('orderItem')

export class OrderItem {
    @PrimaryColumn() orderId: number;
    @PrimaryColumn() productId: number;
    @Column() quantity: number;
    @Column() price: number;

    @ManyToOne(() => Order, (u) => u.orderItem)
    @JoinColumn({ name: 'orderId'})
    order: Order;
    
    @ManyToOne(() => Product, (u) => u.orderItem)
    @JoinColumn({ name: 'productId'})
    products: Product;

}
