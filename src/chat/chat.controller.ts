import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Chat } from '@prisma/client'
import { ChatService } from './chat.service'


@ApiResponse({
  status: 355,
  description: 'Not implemented',
})

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}


  @ApiOperation({
    summary: 'Find chat',
  })
  @Get(':chat')
  async getChat(@Param('chat') id: number, name: string):
    Promise<Chat> {
    return await this.chatService.find(id, name);
  }
  @Post('create')
  async createChat(email: string, name: string): Promise<Chat> {
    return await this.chatService.create(email, name);
  }
  @Delete(':chat/delete')
  async deleteChat(@Param('chat') id: number, name: string): Promise<Chat> {
    return await this.chatService.delete(id, name);
  }
}