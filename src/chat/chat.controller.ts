import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Chat } from "@prisma/client";
import { ChatService } from "./chat.service";
import { ChatDto } from "../chat/dto/chat-dto";


@ApiResponse({
  status: 501,
  description: "Not implemented"
})

@ApiTags("Chat")
@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {
  }

  @ApiOperation({
    summary: "Create chat"
  })
  @ApiBody({
    type: ChatDto
  })
  @Post("create")
  async createChat(@Body() CreateChatDto: ChatDto): Promise<Chat> {
    return await this.chatService.create(CreateChatDto);
  }

  @ApiOperation({
    summary: "Read chat"
  })
  @Get(":id")
  async getChat(@Param("id") id: number):
    Promise<Chat> {
    return await this.chatService.find(id);
  }

  @ApiOperation({
    summary: "Update chat"
  })
  @Post(":id/update")
  async updateChat(@Param("id", ParseIntPipe) id: number,
                   @Body() ChatDto: ChatDto):
    Promise<Chat> {
    return await this.chatService.update(id, ChatDto);
  }

  @ApiOperation({
    summary: "Delete chat"
  })
  @Delete(":id")
  async deleteChat(@Param("id") id: number):
    Promise<void> {
    return await this.chatService.delete(id);
  }
}