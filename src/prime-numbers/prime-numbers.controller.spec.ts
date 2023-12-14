import { Test, TestingModule } from '@nestjs/testing';
import { PrimeNumbersController } from './prime-numbers.controller';
import { PrimeNumbersService } from './prime-numbers.service';

describe('PrimeNumbersController', () => {
  let controller: PrimeNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimeNumbersController],
      providers: [PrimeNumbersService],
    }).compile();

    controller = module.get<PrimeNumbersController>(PrimeNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
