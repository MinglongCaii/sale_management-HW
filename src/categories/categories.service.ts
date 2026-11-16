import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly repo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto) {
    const exists = await this.repo.findOneBy({ name: dto.name });
    if (exists) throw new ConflictException('Category name already exists');
    return this.repo.save(this.repo.create(dto));
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const category = await this.repo.findOneBy({ id });
    if (!category) throw new NotFoundException(`Category ${id} not found`);
    return category;
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    Object.assign(category, dto);
    return this.repo.save(category);
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    await this.repo.remove(category);
  }
}
