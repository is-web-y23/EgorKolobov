import { Get, Controller, Render, UseInterceptors } from "@nestjs/common";
// import { APP_INTERCEPTOR } from "@nestjs/core";
// import { AppInterceptor } from './app.interceptor';

@Controller()
// @UseInterceptors(new AppInterceptor())
export class AppController {
  @Get()
  @Render('index')
  root() {
    return;
  }

  @Get('chat')
  @Render('chat')
  root2() {
    return;
  }

  @Get('table')
  @Render('table')
  root3() {
    return;
  }

  @Get('table_form')
  @Render('table_form')
  root4() {
    return;
  }

  @Get('register')
  @Render('register')
  root5() {
    return;
  }
}
