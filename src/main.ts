import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

import supertokens from 'supertokens-node';
import { SupertokensExceptionFilter } from './auth/auth.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  const hbs = require("hbs");
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.useGlobalPipes(new ValidationPipe());
  hbs.registerPartials(join(__dirname, "..", "views/partials"));
  app.setViewEngine("hbs");

  const config = new DocumentBuilder()
    .setTitle("Egor's API")
    .setDescription("API for my web project")
    .setVersion("0.1")
    .build();
  app.enableCors({
    origin: ['http://localhost:80'], // TODO: URL of the website domain
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  let port = parseInt(process.env.PORT) || 5000;
  await app.listen(port);
}
bootstrap();