import { Injectable } from '@nestjs/common';
import { NumberRange } from "../models/number-range.model";

@Injectable()
export class PrimeNumbersService {
    public truncateRangeIfTooLarge(range: NumberRange): NumberRange {
        if (range.end - range.start > 50000) {
            range.end = range.start + 50000;
        }
        return range;
    }
}
