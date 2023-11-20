import { Injectable, NotFoundException } from '@nestjs/common';
import Product from './entity/new-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateNewProductDto } from './dto/create-newProduct.dto';
import { UpdateNewProductDto } from './dto/update-newProduct.dto';

@Injectable()
export class NewProductService {
  constructor(
    @InjectRepository(Product)
    private newProductRepository: Repository<Product>,
  ) {}

  async getAllProduct(): Promise<Product[]> {
    return await this.newProductRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    const result = await this.newProductRepository.findOneBy({ id });

    if (!result) {
      throw new NotFoundException(
        `The product item is not existed on the database. Request Product ID: (${id})`,
      );
    }

    return result;
  }

  async createNewProduct(
    newProduct: CreateNewProductDto,
  ): Promise<InsertResult> {
    return await this.newProductRepository.insert(newProduct);
  }

  async deleteNewProductById(id: number) {
    const result = await this.newProductRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `The product item is not existed on the database. Request Product ID: (${id})`,
      );
    }

    const success = {
      message: `Delete Success. Product ID: ${id}`,
      statusCode: 200,
    };

    return success;
  }

  async updateNewProduct(id: number, updateData: UpdateNewProductDto) {
    const result = await this.newProductRepository.update(id, updateData);

    if (result.affected === 0) {
      throw new NotFoundException(
        `The product item is not existed on the database. Request Product ID: (${id})`,
      );
    }

    const success = {
      message: `Update Success. Product ID: ${id}`,
      statusCode: 201,
    };

    return success;
  }
}
