import {Comparator, CompareFunction} from "../utils";

export class QuickSort<T> {
    private comparator: Comparator<T>;

    constructor(compareFunction: CompareFunction) {
        this.comparator = new Comparator(compareFunction);
    }

    public sort(data: T[]): T[] {
        if(data.length <= 1) {
            return data;
        }

        const pivot = Math.floor(data.length / 2);
        const dataWithoutPivotValue = data.slice(0, pivot).concat(data.slice(pivot + 1));
        const lessThan = dataWithoutPivotValue.filter(value => this.comparator.lessThanOrEqual(value, data[pivot]));
        const moreThan = dataWithoutPivotValue.filter(value => this.comparator.greaterThan(value, data[pivot]));

        return [...this.sort(lessThan), data[pivot], ...this.sort(moreThan)];
    }
}