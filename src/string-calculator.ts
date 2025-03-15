export const StringCalculator = (numberString: string): number => {
  //Check for empty string
  if (numberString === "") {
    return 0;
  }

  // If string with single value then it will return the number value
  if (numberString.length === 1) {
    return Number(numberString);
  }

  return 0;
};
