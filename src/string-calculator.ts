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

  // Replace new line with delimiter
  numbers = numbers.replace(/\n/g, delimiter);

  // Split the string by the delimiter and convert to numbers
  let numbersArray: number[] = numbers
    .split(delimiter)
    .map((number: string) => parseInt(number, 10));

  // Check for negative numbers
  let negativeNumbersFiltered = numbersArray.filter((num: number) => num < 0);

  if (negativeNumbersFiltered.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbersFiltered.join(",")}`
    );
  }

  // Filter numbers less than or equals to 1000
  return numbersArray
    .filter((num: number) => num <= 1000)
    .reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
};
