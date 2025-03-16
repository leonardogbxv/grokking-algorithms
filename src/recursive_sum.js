function sum(array = []) {
  if (!array.length) {
    return 0;
  }

  return array[0] + sum(array.slice(1))
}

console.log(sum([5,5,10]));