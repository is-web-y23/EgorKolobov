import { HttpException, Injectable, NotFoundException, NotImplementedException } from "@nestjs/common";
import { Chat } from "@prisma/client";
import { ChatDto } from "../chat/dto/chat-dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {
  }

  async create(CreateChatDto: ChatDto): Promise<Chat> {
    return await this.prisma.chat.create({
      data: CreateChatDto
    });
  }

  async find(id: number): Promise<Chat> {
    if(!+id) throw new HttpException('Chat ID is not a number!', 400);
    const chat = await this.prisma.chat.findUnique({
      where: {
        id: +id,
      },
    });
    if (chat) {
      return chat;
    }
    throw new NotFoundException("No such chat!")
  }

  async update(id: number, CreateChatDto: ChatDto): Promise<Chat> {
    const { name } = CreateChatDto;
    const chat = await this.prisma.chat.update({
      where: {
        id: +id
      },
      data: {
        name: name
      }
    });
    if (chat) {
      return chat;
    }
    throw new NotFoundException("No such chat!");
  }

  async delete(id: number): Promise<void> {
    const chat = await this.find(id);
    if (chat) {
      await this.prisma.chat.delete({ where: { id: +id } });
    }
  }
}