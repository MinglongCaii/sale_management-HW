import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({description: 'order name'})
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({description: 'user id'})
    @IsNumber()
    @IsNotEmpty()
    userId!: number;

}
