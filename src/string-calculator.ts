export const StringCalculator = (numberString: string): number => {
  //Check for empty string
  if (numberString === "") {
    return 0;
  }

  let delimiter = ",";

  // Split the string by the delimiter and convert to numbers
  let numbersArray: number[] = numberString
    .split(delimiter)
    .map((number: string) => parseInt(number, 10));

  return numbersArray.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0
  );
};
