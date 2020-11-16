import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ToolsModule } from './tools/tools.module';
import { ServicesModule } from './services/services.module';
import { ProductsModule } from './products/products.module';
import { ProjectsModule } from './projects/projects.module';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(
        __dirname,
        '..',
        '..',
        'client',
        process.env.NODE_ENV === 'production' ? 'latest' : 'dist',
      ),
    }),
    TypeOrmModule.forRoot({
      type: config.get('db.type'),
      host: process.env.RDS_HOSTNAME || config.get('db.host'),
      port: process.env.RDS_PORT || config.get('db.port'),
      username: process.env.RDS_USERNAME || config.get('db.username'),
      password: process.env.RDS_PASSWORD || config.get('db.password'),
      database: process.env.RDS_DB_NAME || config.get('db.database'),
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: process.env.TYPEORM_SYNC || config.get('db.synchronize'),
    }),
    AssetsModule,
    AuthModule,
    ServicesModule,
    ToolsModule,
    ProductsModule,
    ProjectsModule,
  ],
})
export class AppModule {}
