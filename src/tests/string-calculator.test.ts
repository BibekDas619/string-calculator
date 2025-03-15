import { describe, expect, it } from "vitest";
import { StringCalculator } from "../string-calculator";

describe("String Calculator", () => {
  describe("Basic functionalities", () => {
    // Test case for empty string
    it("should return 0 for empty string", () => {
      expect(StringCalculator("")).toBe(0);
    });

    // Test case for string with length of 1
    it("should return the number value for string with single number", () => {
      expect(StringCalculator("1")).toBe(1);
      expect(StringCalculator("5")).toBe(5);
    });

    // Test case for 2 comma separated numbers
    it("should return the sum of 2 comma-separated numbers", () => {
      expect(StringCalculator("1,5")).toBe(6);
      expect(StringCalculator("10,20")).toBe(30);
    });
  });

  describe("Advanced functionalities", () => {
    // Test case for arbitrary number of comma separated numbers
    it("should return the sum of all the comma-separated numbers", () => {
      expect(StringCalculator("1,2,3,4,5")).toBe(15);
      expect(StringCalculator("10,20,30,40,2,9,15")).toBe(126);
      expect(StringCalculator("10,20,30")).toBe(60);
    });

    // Test case for custom delimiter
    it("should support custom delimiter", () => {
      expect(StringCalculator("//;\n1;2")).toBe(3);
      expect(StringCalculator("//|\n1|2|3")).toBe(6);
      expect(StringCalculator("//.\n1.2.3.4")).toBe(10);
    });
  });
});
