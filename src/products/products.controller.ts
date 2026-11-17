import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findByCategory(@Query('categoryId', new ParseIntPipe({ optional: true })) categoryId?: number,)
     {
      return this.productsService.findByCategory(categoryId); //working on this atm
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOneProduct(+id); //+ convert string to number
  }

 
}
