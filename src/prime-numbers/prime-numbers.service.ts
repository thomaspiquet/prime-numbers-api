import { Injectable } from '@nestjs/common';
import { NumberRange } from "../models/number-range.model";

@Injectable()
export class PrimeNumbersService {
    public readonly MAXIMUM_RANGE_SIZE: number = 50000;
    public readonly RANGE_STEP: number = 5000;

    public truncateRangeIfTooLarge(range: NumberRange): NumberRange {
        if (range.end - range.start > this.MAXIMUM_RANGE_SIZE) {
            range.end = range.start + this.MAXIMUM_RANGE_SIZE;
        }
        return range;
    }

    public splitRangeOfNumberIntoSmallerSubRange(range: NumberRange): NumberRange[] {
        if (range.end - range.start < this.RANGE_STEP - 1) {
            const startAt: number = this.getStandardisedRangeStart(range.start);
            return [new NumberRange(startAt, startAt + this.RANGE_STEP - 1)];
        }

        const subRangeCount: number = this.getSubRangeCountFromRange(range);
        const startAt: number = this.getStandardisedRangeStart(range.start);

        let subRanges: NumberRange[] = [];

        for (let subRangeIndex = 0; subRangeIndex < subRangeCount; ++subRangeIndex) {
            subRanges.push(new NumberRange(startAt + this.RANGE_STEP * subRangeIndex,
                startAt + this.RANGE_STEP * subRangeIndex + this.RANGE_STEP - 1))
        }

        return subRanges;
    }

    private getStandardisedRangeStart(start: number): number {
        return Math.floor(start / this.RANGE_STEP) * this.RANGE_STEP;
    }

    private getSubRangeCountFromRange(range: NumberRange): number {
        return Math.ceil((range.end - range.start) / this.RANGE_STEP);
    }
}
