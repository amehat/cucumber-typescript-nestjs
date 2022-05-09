import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import AppModule from './app/app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    Logger.log(`app start on port: ${port}`);
  });
}
bootstrap();