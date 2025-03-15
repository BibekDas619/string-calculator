const escapeRegex = (regex: string) => {
  return regex.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

export const StringCalculator = (numberString: string): number => {
  //Check for empty string
  if (numberString === "") {
    return 0;
  }

  let delimiters = [","];
  let numbers = numberString;

  // Check for custom delimiters
  if (numbers.startsWith("//")) {
    let newDelimiterEndIndex = numbers.indexOf("\n");
    delimiters[0] = numbers.substring(2, newDelimiterEndIndex);
    numbers = numbers.substring(newDelimiterEndIndex + 1);
  }

  // Replace new line with delimiters
  numbers = numbers.replace(/\n/g, delimiters[0]);

  // Split the string by the delimiters and convert to numbers
  let numbersArray: number[] = numbers
    .split(new RegExp(`[${escapeRegex(delimiters[0])}]`))
    .map((number: string) => parseInt(number, 10))
    .filter((num) => !isNaN(num));

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
