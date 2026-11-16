import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) name: string;

  @OneToMany(() => Product, (p) => p.category)
  products: Product[];
}