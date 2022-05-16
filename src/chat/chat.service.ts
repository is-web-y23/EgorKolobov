import { Injectable, NotImplementedException } from '@nestjs/common';
import { Chat } from '@prisma/client'

@Injectable()
export class ChatService {
  async find(id: number, name: string): Promise<Chat> {
    throw new NotImplementedException();
  }
  async create(email: string, name: string): Promise<Chat> {
    throw new NotImplementedException();
  }
  async delete(id: number, name: string): Promise<Chat> {
    throw new NotImplementedException();
  }
}