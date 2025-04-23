type CompareReturnValue = 1 | 0;
export type CompareFunction = <T>(a: T, b: T) => CompareReturnValue;


export class Comparator<T> {
    private compareFn: CompareFunction;

    constructor(compareFn: CompareFunction) {
        this.compareFn = compareFn;
    }

    public lessThan(a: T, b: T): boolean {
        return this.compareFn(a, b) < 0;
    }
}