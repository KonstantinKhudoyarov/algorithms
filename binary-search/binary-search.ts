import {Comparator, CompareFunction} from "../utils";

export class BinarySearch<T> {
    private comparator: Comparator<T>;

    constructor(compareFunction: CompareFunction) {
        this.comparator = new Comparator(compareFunction);
    }

    public search(data: T[], target: T): number {
        let left = 0;
        let right = data.length - 1;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);

            if(this.comparator.equal(data[mid], target)) {
                return mid;
            }

            if(this.comparator.greaterThan(target, data[mid])) {
                left = mid + 1;
            }

            if(this.comparator.lessThan(target, data[mid])) {
                right = mid - 1;
            }
        }

        return -1;
    }
}