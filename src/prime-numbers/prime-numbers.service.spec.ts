import { Test, TestingModule } from '@nestjs/testing';
import { PrimeNumbersService } from './prime-numbers.service';
import { NumberRange } from "../models/number-range.model";

describe('PrimeNumbersService', () => {
  let service: PrimeNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeNumbersService],
    }).compile();
    // @ts-ignore
    service = module.get<PrimeNumbersService>(PrimeNumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should truncate a range of numbers as it is too large', () => {
    const range: NumberRange = new NumberRange(2000, 58400);
    const expectedResult: NumberRange = new NumberRange(2000, 52000);

    const truncatedRange: NumberRange = service.truncateRangeIfTooLarge(range);

    expect(truncatedRange).toEqual(expectedResult);
  })

  it('should not truncate a range of numbers as the size is ok', () => {
    const range: NumberRange = new NumberRange(2000, 50000);
    const expectedResult: NumberRange = new NumberRange(2000, 50000);

    const truncatedRange: NumberRange = service.truncateRangeIfTooLarge(range);

    expect(truncatedRange).toEqual(expectedResult);
  })
});
