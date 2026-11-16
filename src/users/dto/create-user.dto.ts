import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'username' }) //swagger
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    username!: string;

}
