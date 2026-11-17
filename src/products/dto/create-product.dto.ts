import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ description: 'product name'})
    @IsString()
    @IsNotEmpty()
    name!: string;
    
    @ApiProperty({ description: 'description (optional)'})
    @IsString()
    description?: string;
    
    @ApiProperty({ description: 'price'})
    @IsNumber({ maxDecimalPlaces: 2})
    @IsNotEmpty()
    @IsPositive()
    price!: number;
    
    @ApiProperty({ description: 'quantity'})
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    stock: number;

    @ApiProperty({ description: 'category id'})
    @IsInt()
    categoryId: number;
}
