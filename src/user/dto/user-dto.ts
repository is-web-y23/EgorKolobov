import {IsNotEmpty, IsString, IsEmail} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto{
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string
}