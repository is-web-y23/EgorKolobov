import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from '@prisma/client'

@Injectable()
export class UserService {
  async find(id: number, name: string): Promise<User> {
    throw new NotImplementedException();
  }
  async create(email: string, name: string): Promise<User> {
    throw new NotImplementedException();
  }
  async delete(id: number, name: string): Promise<User> {
    throw new NotImplementedException();
  }
}