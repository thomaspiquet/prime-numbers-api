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

    public splitRangeOfNumberIntoSmallerSubRange(range: NumberRange): NumberRange[] {
        if (range.end - range.start < 5000 - 1) {
            const startAt: number = Math.floor(range.start / 5000) * 5000;
            return [new NumberRange(startAt, startAt + 5000 - 1)];
        }

        const subRangeCount: number = Math.ceil((range.end - range.start) / 5000);
        const startAt: number = Math.floor(range.start / 5000) * 5000;

        let subRanges: NumberRange[] = [];

        for (let subRangeIndex = 0; subRangeIndex < subRangeCount; ++subRangeIndex) {
            subRanges.push(new NumberRange(startAt + 5000 * subRangeIndex,
                startAt + 5000 * subRangeIndex + 5000 - 1))
        }

        return subRanges;
    }
}
