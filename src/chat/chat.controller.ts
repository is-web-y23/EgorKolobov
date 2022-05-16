import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Chat } from '@prisma/client'
import { ChatService } from './chat.service'


@ApiResponse({
  status: 501,
  description: 'Not implemented',
})

@ApiTags('Chat')
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
  @Delete(':chat')
  async deleteChat(@Param('chat') id: number, name: string): Promise<Chat> {
    return await this.chatService.delete(id, name);
  }
}