import { describe, expect, it } from "vitest";
import { StringCalculator } from "../string-calculator";

describe("String Calculator", () => {
  // Test case for empty string
  it("should return 0 for empty string", () => {
    expect(StringCalculator("")).toBe(0);
  });
});
