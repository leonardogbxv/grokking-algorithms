function greatestCommonDivisor(a, b) {
  let dividend = a;
  let divisor = b;

  while (divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return dividend;
}

console.log(greatestCommonDivisor(120, 36));