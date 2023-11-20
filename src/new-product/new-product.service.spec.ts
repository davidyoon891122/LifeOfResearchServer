import { Test, TestingModule } from '@nestjs/testing';
import { NewProductService } from './new-product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NewProduct } from './entity/new-product.entity';
import { Repository } from 'typeorm';
import { CreateNewProductDto } from './dto/create-newProduct.dto';

describe('NewProductService', () => {
  let service: NewProductService;
  const mockProduct: NewProduct = {
    id: 1,
    productId: '0001',
    name: 'AIR FORCE1',
    category: 'NEW',
    imagePath: 'localhost:3000/resource/AIRFOCE1',
    brand: 'NIKE',
    description: 'This product is the famouse shose in the world',
    price: 120000,
    isLike: false,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: NewProductService,
          useValue: {
            getAllProduct: jest.fn(() => [mockProduct]),
            getProductById: jest.fn(() => ({})),
            createNewProduct: jest.fn(() => ({})),
            deleteNewProductById: jest.fn(() => ({})),
            updateNewProduct: jest.fn(() => ({})),
          },
        },
        {
          provide: getRepositoryToken(NewProduct),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<NewProductService>(NewProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllProduct', () => {
    it('should be returned All Product', async () => {
      const result = await service.getAllProduct();
      console.log(result);
      expect(result.length).toEqual(1);
    });
  });
});
