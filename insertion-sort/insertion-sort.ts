import {Comparator, CompareFunction} from "../utils";

export class InsertionSort<T> {
    private comparator: Comparator<T>;

    constructor(compareFunction: CompareFunction) {
        this.comparator = new Comparator(compareFunction);
    }

    public sort(data: T[]): T[] {
        for(let i = 1; i < data.length; i++) {
            let j = i-1;

            while(j >= 0 && this.comparator.lessThan(data[j+1], data[j])) {
                const temp = data[j+1];
                data[j+1] = data[j];
                data[j] = temp;
                j--;
            }
        }

        return data;
    }
}