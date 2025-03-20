import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api/';
  const port = process.env.AUTH_SERVICE_PORT;
  const base_url = process.env.BASE_URL;

  const config = new DocumentBuilder()
    .setTitle(`${process.env.APP_NAME} API Documentation`)
    .setDescription('Microservice Authentification Service.')
    .setVersion('1.0')
    .addServer(`${base_url}:${port}`, 'Local environment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.setGlobalPrefix(globalPrefix);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
