import { Controller } from '@nestjs/common';
import { PrimeNumbersService } from './prime-numbers.service';

@Controller('prime-numbers')
export class PrimeNumbersController {
  constructor(private readonly primeNumbersService: PrimeNumbersService) {}
}
