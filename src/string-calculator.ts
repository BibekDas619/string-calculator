export const StringCalculator = (numberString: string): number => {
  //Check for empty string
  if (numberString === "") {
    return 0;
  }

  let delimiter = ",";
  let numbers = numberString;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    let newDelimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, newDelimiterEndIndex);
    numbers = numbers.substring(newDelimiterEndIndex + 1);
  }

  // Split the string by the delimiter and convert to numbers
  let numbersArray: number[] = numbers
    .split(delimiter)
    .map((number: string) => parseInt(number, 10));

  return numbersArray.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
    0
  );
};
