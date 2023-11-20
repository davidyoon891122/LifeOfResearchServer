import { Module } from '@nestjs/common';
import { NewProductController } from './new-product.controller';
import { NewProductService } from './new-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './entity/new-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [NewProductController],
  providers: [NewProductService],
})
export class NewProductModule {}
