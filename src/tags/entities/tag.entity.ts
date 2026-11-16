import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn() id: number;
  @Column({ unique: true }) name: string;

  @ManyToMany(() => Product, (p) => p.tags)
  products: Product[];
}