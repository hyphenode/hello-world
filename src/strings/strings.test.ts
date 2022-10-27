import { capitalize } from "./index";

describe(`testing strings package`, () => {
    it(`should capitalize each word in the sentence`, () => {
        expect(capitalize("hello world")).toBe("Hello World");
    });
});