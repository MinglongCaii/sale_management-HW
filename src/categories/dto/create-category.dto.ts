import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'category names' }) //swagger
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}