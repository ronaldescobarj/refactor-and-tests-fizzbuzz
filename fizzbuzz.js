function fizzbuzz () {
  let fizzbuzzString = "";
  for (let counter = 1; counter <= 100; counter++) {
    if (counter % 3 !== 0 && counter % 5 !== 0)
      fizzbuzzString += counter.toString();
    else {
      if (counter % 3 === 0)
        fizzbuzzString += "Fizz";
      if (counter % 5 === 0)
        fizzbuzzString += "Buzz";
    }
  }
  return fizzbuzzString;
}

export { fizzbuzz }

fizzbuzz()