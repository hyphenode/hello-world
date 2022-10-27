import { mostRepeated } from "./index";

describe(`test array functions`, () => {
    it(`should return most common value in array list`, () => {
        expect(mostRepeated([1, 1, 0, 1, 1, 1])).toBe(1);
    });
});