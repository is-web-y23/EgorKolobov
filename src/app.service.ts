import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'HELLO WORLD 2';
  }
}
