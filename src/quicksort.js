function quicksort(array = []) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const rest = array.slice(1);
  const smaller = [];
  const greater = [];

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] <= pivot) {
      smaller.push(rest[i]);
    } else {
      greater.push(rest[i]);
    }
  }

  return [...quicksort(smaller), pivot, ...quicksort(greater)];
}

console.log(quicksort([10, 5, 2, 3]));