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

    // Test case for delimiter of any length
    it("should support delimiter of any length", () => {
      expect(StringCalculator("//***\n1***2***3")).toBe(6);
      expect(StringCalculator("//##\n1##2##3")).toBe(6);
      expect(StringCalculator("//....\n1....2....3")).toBe(6);
    });

    // Test case for new line in between numbers
    it("should handle new line between numbers", () => {
      expect(StringCalculator("1\n2,3")).toBe(6);
      expect(StringCalculator("5\n10\n15")).toBe(30);
      expect(StringCalculator("1,2\n3")).toBe(6);
    });

    // Test case for throwing error if negative numbers are present also all negative numbers will be present inside of that error message separated by comma
    it("should throw an error message if negative numbers are present by including all of them inside of the error messages", () => {
      expect(() => StringCalculator("-1,-2")).toThrowError(
        "negative numbers not allowed -1,-2"
      );
      expect(() => StringCalculator("1,-2,-3,4,-5")).toThrowError(
        "negative numbers not allowed -2,-3,-5"
      );
      expect(() => StringCalculator("5\n10\n-15")).toThrowError(
        "negative numbers not allowed -15"
      );
      expect(() => StringCalculator("//;\n-1;-2")).toThrowError(
        "negative numbers not allowed -1,-2"
      );
    });

    // Test case to ignore numbers greater than 1000
    it("should ignore numbers greater than 1000", () => {
      expect(StringCalculator("2,1001")).toBe(2);
      expect(StringCalculator("//|\n1000|1001")).toBe(1000);
      expect(StringCalculator("1,2\n1001,3")).toBe(6);
    });

    // Test case to allow multiple different delimiters
    it("should handle multiple delimiters with special regex characters", () => {
      expect(StringCalculator("//.+\n1.2+3")).toBe(6);
      expect(StringCalculator("//^|\n1^2|3")).toBe(6);
      expect(StringCalculator("//*?\n1*2?3")).toBe(6);
    });
  });
});
