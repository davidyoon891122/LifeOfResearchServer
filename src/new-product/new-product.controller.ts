import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NewProductService } from './new-product.service';
import { NewProduct } from './entity/new-product.entity';
import { CreateNewProductDto } from './dto/create-newProduct.dto';
import { UpdateNewProductDto } from './dto/update-newProduct.dto';

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

  @Patch('/:id')
  async updateNewProduct(
    @Param('id') id: number,
    @Body() updateData: UpdateNewProductDto,
  ) {
    return this.newProductService.updateNewProduct(id, updateData);
  }
}
