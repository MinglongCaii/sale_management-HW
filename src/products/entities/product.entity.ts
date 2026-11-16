import { Category } from "src/categories/entities/category.entity";
import { Tag } from "src/tags/entities/tag.entity";
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
@Index(['name'])
export class Product {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column({ type: 'text', nullable: true }) description: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 }) price: number;
  @Column({ type: 'int', default: 0 }) stock: number;

  @ManyToOne(() => Category, (c) => c.products, { nullable: true, onDelete: 'SET NULL' })
  category: Category;

  @ManyToMany(() => Tag, (t) => t.products)
  @JoinTable()
  tags: Tag[];
}