import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    description?: string;

    @IsNumber({ maxDecimalPlaces: 2})
    
    @IsNotEmpty()
    @IsPositive()
    price!: number;

    @IsInt()
    @Min(0)
    @IsNotEmpty()
    stock: number;
}
