import { add } from "./add";

describe(`test add function`, () => {
    it(`should add two positive integers`, () => {
        expect(add(2, 3)).toBe(5);
    });

    it(`should add two negative integers`, () => {
        expect(add(-2, -3)).toBe(-5);
    });
});