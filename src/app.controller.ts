import { Get, Controller, Render, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";
import { ApiExcludeEndpoint } from "@nestjs/swagger";

@Controller()
@UseInterceptors(AppInterceptor)
export class AppController {

  @ApiExcludeEndpoint(true)
  @Get()
  @Render("index")
  root() {
    return { username: "Egor" };
  }

  @ApiExcludeEndpoint(true)
  @Get("chat")
  @Render("chat")
  chat() {
    return { username: "Egor" };
  }

  @ApiExcludeEndpoint(true)
  @Get("lab7chat")
  @Render("lab7chat")
  lab7chat() {
    return {};
  }

  @ApiExcludeEndpoint(true)
  @Get("table")
  @Render("table")
  table() {
    return { username: "Egor" };
  }

  @ApiExcludeEndpoint(true)
  @Get("table_form")
  @Render("table_form")
  table_form() {
    return { username: "Egor" };
  }

  @ApiExcludeEndpoint(true)
  @Get("register")
  @Render("register.hbs")
  register() {
    return { username: 'Egor' };
  }
}

