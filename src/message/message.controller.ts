import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { ApiBasicAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {  Message } from "@prisma/client";
import { MessageService } from "./message.service";
import { MessageDto } from "../message/dto/message-dto";
import { AuthGuard } from "../auth/auth.guard";
import { Session } from "../auth/session.decorator";
import { SessionContainer } from "supertokens-node/lib/build/recipe/session/faunadb";


@ApiResponse({
  status: 501,
  description: "Not implemented"
})

@ApiTags("Message")
@Controller("message")
export class MessageController {
  constructor(private readonly messageService: MessageService) {
  }

  @ApiOperation({
    summary: "Create message"
  })
  @ApiBody({
    type: MessageDto
  })
  @Post("create")
  async createMessage(@Body() CreateMessageDto: MessageDto): Promise<Message> {
    return await this.messageService.create(CreateMessageDto);
  }

  @ApiOperation({
    summary: 'Read message',
  })
  @ApiResponse({
    status: 401,
    description: "You're not authorized to access this resource",
  })
  @ApiBasicAuth()
  @Get(":id")
  @UseGuards(AuthGuard)
  async getMessage(@Param("id") id: number, @Session() session: SessionContainer):
    Promise<Message> {
    const userId = session.getUserId();
    console.log(userId);
    return await this.messageService.find(id);
  }

  @ApiOperation({
    summary: "Update Message"
  })
  @Post(":id/update")
  async updateMessage(@Param("id", ParseIntPipe) id: number,
                   @Body() MessageDto: MessageDto):
    Promise<Message> {
    return await this.messageService.update(id, MessageDto);
  }

  @ApiOperation({
    summary: "Delete message"
  })
  @Delete(":id")
  async deleteMessage(@Param("id") id: number):
    Promise<void> {
    return await this.messageService.delete(id);
  }
}