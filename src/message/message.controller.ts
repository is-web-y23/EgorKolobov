import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Message } from '@prisma/client'
import { MessageService } from './message.service'


@ApiResponse({
  status: 355,
  description: 'Not implemented',
})

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}


  @ApiOperation({
    summary: 'Find message',
  })
  @Get(':Message')
  async getMessage(@Param('message') id: number, name: string):
    Promise<Message> {
    return await this.messageService.find(id, name);
  }
  @Post('create')
  async createMessage(email: string, name: string): Promise<Message> {
    return await this.messageService.create(email, name);
  }
  @Delete(':message/delete')
  async deleteMessage(@Param('message') id: number, name: string): Promise<Message> {
    return await this.messageService.delete(id, name);
  }
}