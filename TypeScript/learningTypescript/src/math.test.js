"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
describe("Math Utility Functions", () => {
    test("adds two numbers correctly", () => {
        expect((0, math_1.add)(2, 3)).toBe(5);
    });
    test("adds negative numbers", () => {
        expect((0, math_1.add)(-2, -3)).toBe(-5);
    });
});
