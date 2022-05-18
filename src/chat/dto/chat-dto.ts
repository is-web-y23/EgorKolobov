import {IsNotEmpty, IsString, IsEmail} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class ChatDto{
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string
}