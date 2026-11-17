import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class addOrderItemDto {
    @ApiProperty({description: ''})
    @IsNumber()
    @IsNotEmpty()
    orderId!: number;

    @ApiProperty({description: ''})
    @IsNumber()
    @IsNotEmpty()
    productId!: number;
    
    @ApiProperty({description: ''})
    @IsNumber()
    @IsNotEmpty()
    quantity!: number;
    
}