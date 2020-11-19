import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap(port) {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors({
      origin: 'http://localhost:3000',
      credentials: true,
    });
  }

  await app.listen(port);
}

bootstrap(process.env.PORT || config.get('server.port'));
