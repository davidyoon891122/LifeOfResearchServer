import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewProductService } from './new-product.service';
import { NewProduct } from './entity/new-product.entity';
import { CreateNewProductDto } from './dto/create-newProduct.dto';

@Controller('new-product')
export class NewProductController {
  constructor(private readonly newProductService: NewProductService) {}

  @Get()
  async getNewProducts(): Promise<NewProduct[]> {
    return await this.newProductService.getAllProduct();
  }

  @Post()
  async createNewProduct(@Body() newProduct: CreateNewProductDto) {
    return await this.newProductService.createNewProduct(newProduct);
  }
}
