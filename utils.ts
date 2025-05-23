type CompareReturnValue = 1 | 0;
export type CompareFunction = <T>(a: T, b: T) => CompareReturnValue;


export class Comparator<T> {
    private compareFn: CompareFunction;

    constructor(compareFn: CompareFunction) {
        this.compareFn = compareFn;
    }

    public equal(a: T, b: T): boolean {
        return this.compareFn(a, b) === 0;
    }

    public lessThan(a: T, b: T): boolean {
        return this.compareFn(a, b) < 0;
    }

    public greaterThan(a: T, b: T): boolean {
        return this.compareFn(a, b) > 0;
    }

    public lessThanOrEqual(a: T, b: T): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    public greaterThanOrEqual(a: T, b: T): boolean {
        return this.greaterThan(a, b) || this.equal(a, b);
    }
}