import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../../../src/adapter/driver/products.api';
import { ProductsService } from '../../../src/@core/products/controller/products.controller';
import { IProductsRepository } from '../../../src/@core/products/repositories/iproduct.repository';
import { PrismaProductsRepository } from '../../../src/adapter/driven/infra/repositories/prisma-products-repository';
import { PrismaService } from '../../../src/adapter/driven/infra/database/prisma.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: IProductsRepository,
          useClass: PrismaProductsRepository,
        },
        PrismaService,
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
