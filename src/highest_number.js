function getHighestNumber(array = []) {
  if (array.length === 1) {
    return array[0];
  }

  const rest = array.slice(1);
  const highestOfRest = getHighestNumber(rest);

  if (array[0] > highestOfRest) {
    return array[0];
  }

  return highestOfRest;
}

console.log(getHighestNumber([3,10,5,8,4,9]))