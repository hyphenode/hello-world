import { add, isOdd } from "../src/index";

describe(`test add function`, () => {
    it(`should add two positive integers`, () => {
        expect(add(2, 3)).toBe(5);
    });

    it(`should add two negative integers`, () => {
        expect(add(-2, -3)).toBe(-5);
    });
});

describe(`test predicate functions`, () => {
    it(`should return true for the number 5`, () => {
        expect(isOdd(5)).toBe(true);
    });
});