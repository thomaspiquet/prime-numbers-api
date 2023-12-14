import { Injectable } from '@nestjs/common';
import { NumberRange } from "../models/number-range.model";

@Injectable()
export class PrimeNumbersService {
    public readonly MAXIMUM_RANGE_SIZE: number = 50000;

    public truncateRangeIfTooLarge(range: NumberRange): NumberRange {
        if (range.end - range.start > this.MAXIMUM_RANGE_SIZE) {
            range.end = range.start + this.MAXIMUM_RANGE_SIZE;
        }
        return range;
    }
}
