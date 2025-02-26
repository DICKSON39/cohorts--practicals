import { add } from "./math";

describe("Math Utility Functions", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });
});


  
