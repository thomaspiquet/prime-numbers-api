import { Module } from '@nestjs/common';
import { PrimeNumbersService } from './prime-numbers.service';
import { PrimeNumbersController } from './prime-numbers.controller';

@Module({
  controllers: [PrimeNumbersController],
  providers: [PrimeNumbersService],
})
export class PrimeNumbersModule {}
