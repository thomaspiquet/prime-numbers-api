import { Injectable } from '@nestjs/common';
import { NumberRange } from "../models/number-range.model";

@Injectable()
export class PrimeNumbersService {
    public truncateRangeIfTooLarge(range: NumberRange): NumberRange {
        return null;
    }
}
