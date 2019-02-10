function generateValue(number) {
  let value = "";
  if (number % 3 !== 0 && number % 5 !== 0)
     value += number.toString();
  else {
    if (number % 3 === 0)
      value += "Fizz";
    if (number % 5 === 0)
      value += "Buzz";
  }
  return value;
}

function fizzbuzz(limit) {
  let fizzbuzzString = "";
  for (let counter = 1; counter <= limit; counter++) {
    fizzbuzzString += generateValue(counter);
  }
  return fizzbuzzString;
}

export { fizzbuzz, generateValue }