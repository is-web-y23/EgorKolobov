import { Get, Controller, Render, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";

@Controller() // - чтобы логин работал
// @UseInterceptors(AppInterceptor) // - чтобы работало время сервера
export class AppController {
  @Get()
  @Render("index")
  root() {
    return { username: "Egor" };
  }

  @Get("chat")
  @Render("chat")
  root2() {
    return { username: "Egor" };
  }

  @Get("table")
  @Render("table")
  root3() {
    return { username: "Egor" };
  }

  @Get("table_form")
  @Render("table_form")
  root4() {
    return { username: "Egor" };
  }

  @Get("register")
  @Render("register.hbs")
  register() {
    return { username: 'Egor' };
  }
}
