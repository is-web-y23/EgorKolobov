import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from "./user/user.service";
import { ChatService } from "./chat/chat.service";
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [UserModule, ChatModule, MessageModule],
  controllers: [AppController],
  providers: [AppService, UserService, ChatService],
})
export class AppModule {}
