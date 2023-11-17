import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NewProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  imagePath: string;

  @Column()
  brand: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isLike: boolean;
}
