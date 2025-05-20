import {Comparator, CompareFunction} from "../utils";

export class SelectionSort<T> {
    private comparator: Comparator<T>;

    constructor(compareFunction: CompareFunction) {
        this.comparator = new Comparator(compareFunction);
    }

    public sort(data: T[]): T[] {
        if(data.length <= 1) {
            return data;
        }

        const dataLength = data.length;
        const result: T[] = [];

        for(let i = 0; i < dataLength; i++) {
            result.push(...data.splice(this.findSmallestElementIndex(data), 1));
        }

        return result;
    }

    private findSmallestElementIndex(data: T[]): number {
        let smallestElement = data[0];
        let index = 0;

        for(let i = 1; i < data.length; i++) {
            if (this.comparator.lessThan(data[i], smallestElement)) {
                smallestElement = data[i];
                index = i;
            }
        }

        return index;
    }
}