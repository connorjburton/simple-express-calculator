type OpFunction = (a: number, b: number) => number;
type Operations = {
    '+': OpFunction;
    '-': OpFunction;
    '*': OpFunction;
    '/': OpFunction;
};

export default class Calculator {
    static readonly opMap: Operations = {
        '+': (total: number, val: number): number => total += val,
        '-': (total: number, val: number): number => total -= val,
        '*': (total: number, val: number): number => total *= val,
        '/': (total: number, val: number): number => total /= val,
    }

    private static validate(input: unknown): void {
        if (!Array.isArray(input)) {
            throw new TypeError('input is not an array')
        }

        if (input.length === 0 || input.some((val) => typeof val !== 'number')) {
            throw new TypeError('input is not an array of numbers')
        }
    }

    private static removeNaN(val: number) {
        return !Number.isNaN(val);
    }

    private static operate(operation: keyof Operations, input: number[]): number {
        return input.filter(Calculator.removeNaN).reduce(Calculator.opMap[operation]);
    }

    private static parse(input: number) {
        return parseFloat(input.toFixed(2));
    }

    static add(input: number[]): number {
        Calculator.validate(input);

        return Calculator.parse(Calculator.operate('+', input));
    }

    static subtract(input: number[]): number {
        Calculator.validate(input);
        
        return Calculator.parse(Calculator.operate('-', input));
    }

    static divide(input: number[]): number {
        Calculator.validate(input);

        return Calculator.parse(Calculator.operate('/', input));
    }

    static multiply(input: number[]): number {
        Calculator.validate(input);

        return Calculator.parse(Calculator.operate('*', input));
    }
}