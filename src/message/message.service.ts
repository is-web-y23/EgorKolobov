import { Injectable, NotImplementedException } from '@nestjs/common';
import { Message } from '@prisma/client'

@Injectable()
export class MessageService {
  async find(id: number, name: string): Promise<Message> {
    throw new NotImplementedException();
  }
  async create(email: string, name: string): Promise<Message> {
    throw new NotImplementedException();
  }
  async delete(id: number, name: string): Promise<Message> {
    throw new NotImplementedException();
  }
}