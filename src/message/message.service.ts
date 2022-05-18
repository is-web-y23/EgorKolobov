import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { Message } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { MessageDto } from "./dto/message-dto";

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {
  }

  async create(CreateMessageDto: MessageDto): Promise<Message> {
    return await this.prisma.message.create({
      data: CreateMessageDto
    });
  }

  async find(id: number): Promise<Message> {
    if (!+id) throw new HttpException("Message ID is not a number!", 400);
    const message = await this.prisma.message.findUnique({
      where: {
        id: +id
      }
    });
    if (message) {
      return message;
    }
    throw new NotFoundException("No such message!");
  }

  async update(id: number, CreateMessageDto: MessageDto): Promise<Message> {
    const { title, content, authorId, chatId } = CreateMessageDto;
    const message = await this.prisma.message.update({
      where: {
        id: +id
      },
      data: {
        title: title,
        content: content,
        authorId: authorId,
        chatId: chatId
      }
    });
    if (message) {
      return message;
    }
    throw new NotFoundException("No such message!");
  }

  async delete(id: number): Promise<void> {
    const message = await this.find(id);
    if (message) {
      await this.prisma.message.delete({ where: { id: +id } });
    }
  }
}