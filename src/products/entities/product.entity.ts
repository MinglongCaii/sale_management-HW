import { Category } from "src/categories/entities/category.entity";
import { OrderItem } from "src/orders/entities/orderItem.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
@Index(['name','categoryId'])
export class Product {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column({ type: 'text', nullable: true }) description: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 }) price: number;
  @Column({ type: 'int', default: 0 }) stock: number;

  @Column({ nullable:true}) categoryId: number;  
  @ManyToOne(() => Category, (c) => c.products, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'categoryId'})
  category: Category;

  @ManyToMany(() => Tag, (t) => t.products)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => OrderItem, (uo) => uo.products)
  orderItem: OrderItem[];

}