import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto) {
    const exists = await this.repo.findOneBy({ name: dto.name });
    if (exists) throw new ConflictException('Product already existed');
    return this.repo.save(this.repo.create(dto));
  }
  
  async findAll() {
    return await this.repo.find();
  }

  async findByCategory(id: number) {
    return await this.repo.find({ where: { category: { id : id}}});
  }

  async findOneProduct(id: number) {
      const product = await this.repo.findOneBy({ id });
      if (!product) throw new NotFoundException(`Product ${id} not found`);
      return product;
  }

}
