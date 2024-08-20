import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const configService = app.get(ConfigService);

  app.use(cors());

  const config = new DocumentBuilder()
    .setTitle('Task Management API')
    .setDescription('The Task Management API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  app.use(
    basicAuth({
      challenge: true,
      users: { admin: '123' },
    }),
  );
  app.enableVersioning();
  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const configService1 = app.get(ConfigService);
  const port = configService1.get<number>('PORT') || 4500;
  await app.listen(port);
}
bootstrap();
