import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewProductModule } from './new-product/new-product.module';
import Product from './new-product/entity/new-product.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './admin/admin.module';
import AdminUser from './admin/login/entity/admin-user.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'public/images'),
        serveRoot: '/resource',
        serveStaticOptions: {
          extensions: ['jpeg', 'png'],
        },
      },
      {
        rootPath: join(__dirname, '..', 'public/views'),
        serveRoot: '/upload',
      },
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Product, AdminUser],
      synchronize: true,
    }),
    NewProductModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
