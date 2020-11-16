import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap(port) {
  const app = await NestFactory.create(AppModule);

  await app.listen(port);
}

bootstrap(process.env.PORT || config.get('server.port'));
