import { PartialType } from '@nestjs/mapped-types';
import { CreateNewProductDto } from './create-newProduct.dto';

export class UpdateNewProductDto extends PartialType(CreateNewProductDto) {}
