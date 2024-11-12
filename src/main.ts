import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://hr-automation-frontend-walb.vercel.app',
      'https://hr-automation-frontend-sigma.vercel.app',
    ],
  });

  await app.listen(5500);
}
bootstrap();
