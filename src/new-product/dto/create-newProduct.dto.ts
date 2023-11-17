import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNewProductDto {
  @IsString()
  readonly productId: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly category: string;

  @IsString()
  readonly imagePath: string;

  @IsString()
  readonly brand: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsBoolean()
  readonly isLike: boolean;
}
