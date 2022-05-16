import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from '@prisma/client'
import { UserService } from './user.service'


@ApiResponse({
  status: 501,
  description: 'Not implemented',
})

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @ApiOperation({
    summary: 'Find user',
  })
  @Get(':user')
  async getUser(@Param('user') id: number, name: string):
    Promise<User> {
    return await this.userService.find(id, name);
  }
  @Post('create')
  async createUser(email: string, name: string): Promise<User> {
    return await this.userService.create(email, name);
  }
  @Delete(':user')
  async deleteUser(@Param('user') id: number, name: string): Promise<User> {
    return await this.userService.delete(id, name);
  }
}