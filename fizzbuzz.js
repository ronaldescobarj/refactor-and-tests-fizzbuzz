function fizzbuzz () {
  let fizzbuzzString = ""
  for(let counter = 1; counter <= 100; counter++) 
  {
    if (counter % 3 === 0 && counter % 5 === 0)
      {
        fizzbuzzString += "FizzBuzz";
      }
      else 
      if (counter % 3 === 0)
        {
          fizzbuzzString += "Fizz";
        }
        else 
        if (counter % 5 === 0)
          {
            fizzbuzzString += "Buzz";
          }
          else
          fizzbuzzString += counter.toString();
  }
  return fizzbuzzString;
}

export { fizzbuzz }

fizzbuzz()