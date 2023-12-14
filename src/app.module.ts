import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeNumbersModule } from './prime-numbers/prime-numbers.module';

@Module({
  imports: [PrimeNumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
