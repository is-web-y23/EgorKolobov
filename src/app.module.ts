import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from "./user/user.service";
import { ChatService } from "./chat/chat.service";
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { MessageService } from './message/message.service';
import { PrismaService } from "./prisma.service";
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";
import { AppGateway } from './app.gateway';

@Module({
  imports: [UserModule, ChatModule, MessageModule, ConfigModule.forRoot(), AuthModule.forRoot({
    connectionURI: process.env.ConnectionURI,
    apiKey: process.env.apiKey,
    appInfo: {
      appName: "web-labs-2022",
      apiDomain: "http://localhost:80/",
      websiteDomain: "http://localhost:80/",
      apiBasePath: "/auth",
      websiteBasePath: "/auth"
    },
  })],
  controllers: [AppController],
  providers: [AppService, MessageService, UserService, ChatService, PrismaService, AppGateway],
})
export class AppModule {}