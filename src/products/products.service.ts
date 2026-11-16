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

  async findByCategory(ids: number[]) { //FE handles what to send id instead of names.
    return await this.repo.find({ where: { category: { id : In(ids)}}});
  }

  async findOne(id: number) {
      const category = await this.repo.findOneBy({ id });
      if (!category) throw new NotFoundException(`Category ${id} not found`);
      return category;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
