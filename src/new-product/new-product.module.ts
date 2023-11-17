import { Module } from '@nestjs/common';
import { NewProductController } from './new-product.controller';
import { NewProductService } from './new-product.service';

@Module({
  controllers: [NewProductController],
  providers: [NewProductService],
})
export class NewProductModule {}
