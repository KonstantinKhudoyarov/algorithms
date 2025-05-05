import {Comparator, CompareFunction} from "../utils";

class MergeSort<T> {
    private comparator: Comparator<T>;

    constructor(compareFunction: CompareFunction) {
        this.comparator = new Comparator(compareFunction);
    }

    public sort(data: T[]): T[] {
        if(data.length <= 1){
            return data;
        }

        const middleIndex = Math.floor(data.length / 2);
        const leftSortedArray = this.sort(data.slice(0, middleIndex));
        const rightSortedArray = this.sort(data.slice(middleIndex, data.length));

        return this.merge(leftSortedArray, rightSortedArray);
    }

    private merge(leftArray: T[], rightArray: T[]): T[] {
        const result: T[] = [];

        while(leftArray.length && rightArray.length) {
            const arrayForAction = this.comparator.lessThan(leftArray[0], rightArray[0]) ? leftArray : rightArray;
            result.push(arrayForAction.shift());
        }

        return result.concat(leftArray, rightArray);
    }
}