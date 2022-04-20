import { Get, Controller, Render, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";
import {
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';


@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {
  @Get()
  @Render("index")
  root() {
    return { username: "Egor" };
  }

  @Get("chat")
  @Render("chat")
  chat() {
    return { username: "Egor" };
  }

  @Get("table")
  @Render("table")
  table() {
    return { username: "Egor" };
  }

  @Get("table_form")
  @Render("table_form")
  table_form() {
    return { username: "Egor" };
  }

  @Get("register")
  @Render("register.hbs")
  register() {
    return { username: 'Egor' };
  }
}

