import {add, subtract, multiply, checkValue} from './01'

let firstValue: number;
let secondValue: number;
let thirdValue: number;

beforeEach(() => {
    firstValue = 1;
    secondValue = 3;
    thirdValue = 5;
})


test ("Sum should be correct", () => {
    const firstResult = add (firstValue, secondValue);
    expect(firstResult).toBe(4)

    // Попытка внутри теста присвоить другое значение
    firstValue = 100;
    const secondResult = add (firstValue, secondValue)
    expect(secondResult).toBe(103)
})


test ("Subtracting should be correct", () => {
    const firstResult = subtract (firstValue, secondValue);

    firstValue = 103;
    const secondResult = subtract (firstValue, secondValue)

    expect(firstResult).toBe(-2)
    expect(secondResult).toBe(100)
})


test ('multiply should be correct', () => {
    const firstResult = multiply(firstValue, secondValue);
    const secondResult = multiply(secondValue, thirdValue);

    expect(firstResult).toBe(3)
    expect(secondResult).toBe(15)
})



describe('checkValue should be correct', () => {
    test('Correct value', () => {
        expect(checkValue(60)).toBe(true);
    })
    test('Less then correct value', () => {
        expect(checkValue(-1)).toBe(false);
    })
    test('More then correct value', () => {
        expect(checkValue(101)).toBe(false);
    })
    test('Begginer', () => {
        expect(checkValue(0)).toBe(true);
    })
    test('Ending', () => {
        expect(checkValue(100)).toBe(true);
    })
})