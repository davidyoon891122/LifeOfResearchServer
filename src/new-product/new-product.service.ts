import { Injectable } from '@nestjs/common';
import { NewProduct } from './entity/new-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateNewProductDto } from './dto/create-newProduct.dto';
import { UpdateNewProductDto } from './dto/update-newProduct.dto';

@Injectable()
export class NewProductService {
  constructor(
    @InjectRepository(NewProduct)
    private newProductRepository: Repository<NewProduct>,
  ) {}

  async getAllProduct(): Promise<NewProduct[]> {
    return await this.newProductRepository.find();
  }

  async createNewProduct(
    newProduct: CreateNewProductDto,
  ): Promise<InsertResult> {
    return this.newProductRepository.insert(newProduct);
  }

  async updateNewProduct(id: number, updateData: UpdateNewProductDto) {
    return this.newProductRepository.update(id, updateData);
  }
}
