export function add (a: number, b: number) {
    return a + b
}


export function subtract (a: number, b: number) {
    return a - b
}


export function multiply (a: number, b: number) {
    return a * b
}


export const checkValue = (value: number) => {
    if(value < 0 || value > 100) {
        return false;
    }
    return true;
}
