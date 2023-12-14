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

  it('should split a too large range of numbers into standardised batch', () => {
    const range: NumberRange = new NumberRange(2000, 23400);
    const expectedResult: NumberRange[] = [
      new NumberRange(0, 4999),
      new NumberRange(5000, 9999),
      new NumberRange(10000, 14999),
      new NumberRange(15000, 19999),
      new NumberRange(20000, 24999)];

    const splitRanges: NumberRange[] = service.splitRangeOfNumberIntoSmallerSubRange(range);

    expect(splitRanges).toEqual(expectedResult);
  })

  it("should standardize the range without splitting it, as its size is acceptable", () => {
    const range: NumberRange = new NumberRange(2000, 3000);
    const expectedResult: NumberRange[] = [
      new NumberRange(0, 4999)];

    const splitRanges: NumberRange[] = service.splitRangeOfNumberIntoSmallerSubRange(range);

    expect(splitRanges).toEqual(expectedResult);
  })
});
