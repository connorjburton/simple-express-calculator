import Calculator from './calc';

const notArrayErr = new TypeError('input is not an array');
const notNumbersErr = new TypeError('input is not an array of numbers');

describe('Calculator.add', () => {
    test('should throw TypeError if not an array', () => {
        // @ts-ignore
        expect(() => Calculator.add()).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.add(1)).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.add('')).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.add({})).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.add(() => {})).toThrow(notArrayErr);
    });

    test('should throw array if not array of numbers', () => {
        expect(() => Calculator.add([])).toThrow(notNumbersErr);
    });

    test('should correctly add', () => {
        expect(Calculator.add([1, 2])).toBe(3);
        expect(Calculator.add([-5, 10])).toBe(5);
        expect(Calculator.add([1.5, 2.3, 3.0, 3])).toBe(9.8);
        expect(Calculator.add([1, NaN, 10])).toBe(11);
    });
});

describe('Calculator.subtract', () => {
    test('should throw TypeError if not an array', () => {
        // @ts-ignore
        expect(() => Calculator.subtract()).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.subtract(1)).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.subtract('')).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.subtract({})).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.subtract(() => {})).toThrow(notArrayErr);
    });

    test('should throw array if not array of numbers', () => {
        expect(() => Calculator.subtract([])).toThrow(notNumbersErr);
    });

    test('should correctly subtract', () => {
        expect(Calculator.subtract([5, 1])).toBe(4);
        expect(Calculator.subtract([-5, 10])).toBe(-15);
        expect(Calculator.subtract([21.5, 2.3, 3.0, 3])).toBe(13.2);
        expect(Calculator.subtract([10, NaN, 1])).toBe(9);
    });
});

describe('Calculator.multiply', () => {
    test('should throw TypeError if not an array', () => {
        // @ts-ignore
        expect(() => Calculator.multiply()).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.multiply(1)).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.multiply('')).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.multiply({})).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.multiply(() => {})).toThrow(notArrayErr);
    });
    
    test('should throw array if not array of numbers', () => {
        expect(() => Calculator.multiply([])).toThrow(notNumbersErr);
    });

    test('should correctly multiply', () => {
        expect(Calculator.multiply([2, 5])).toBe(10);
        expect(Calculator.multiply([-5, 10])).toBe(-50);
        expect(Calculator.multiply([21.5, 2.3, 3.0, 3])).toBe(445.05);
        expect(Calculator.multiply([1, NaN, 10])).toBe(10);
    });
});

describe('Calculator.divide', () => {
    test('should throw TypeError if not an array', () => {
        // @ts-ignore
        expect(() => Calculator.divide()).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.divide(1)).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.divide('')).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.divide({})).toThrow(notArrayErr);
        // @ts-ignore
        expect(() => Calculator.divide(() => {})).toThrow(notArrayErr);
    });
    
    test('should throw array if not array of numbers', () => {
        expect(() => Calculator.divide([])).toThrow(notNumbersErr);
    });

    test('should correctly divide', () => {
        expect(Calculator.divide([2, 5])).toBe(0.4);
        expect(Calculator.divide([-5, 10])).toBe(-0.5);
        expect(Calculator.divide([2155.5, 2.3, 3.0, 3])).toBe(104.13);
        expect(Calculator.divide([10, NaN, 2])).toBe(5);
    });
});