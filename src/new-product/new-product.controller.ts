import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get('/:id')
  async getNewProductById(@Param('id') id: number): Promise<NewProduct> {
    return await this.newProductService.getProductById(id);
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
    return await this.newProductService.updateNewProduct(id, updateData);
  }

  @Delete('/:id')
  async deleteNewProductById(@Param('id') id: number) {
    return await this.newProductService.deleteNewProductById(id);
  }
}
