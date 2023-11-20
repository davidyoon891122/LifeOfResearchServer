import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Product {
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
  type: string;

  @Column({ default: false })
  isLike: boolean;
}
