import { Module } from '@nestjs/common';
import { NewProductController } from './new-product.controller';
import { NewProductService } from './new-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewProduct } from './entity/new-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewProduct])],
  controllers: [NewProductController],
  providers: [NewProductService],
})
export class NewProductModule {}
