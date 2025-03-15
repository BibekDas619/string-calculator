import { describe, expect, it } from "vitest";
import { StringCalculator } from "../string-calculator";

describe("String Calculator", () => {
  // Test case for empty string
  it("should return 0 for empty string", () => {
    expect(StringCalculator("")).toBe(0);
  });

  // Test case for string with length of 1
  it("should return the number value for string with single number", () => {
    expect(StringCalculator("1")).toBe(1);
    expect(StringCalculator("5")).toBe(5);
  });
});
