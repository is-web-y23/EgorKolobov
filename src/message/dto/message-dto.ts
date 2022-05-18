import {IsNotEmpty, IsString, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class MessageDto{
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  authorId: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  chatId: number
}
