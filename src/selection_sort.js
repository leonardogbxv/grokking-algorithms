function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function orderBySelection(arr) {
  const newArr = [];
  const originalLength = arr.length;

  for (let i = 0; i < originalLength; i++) {
    let smallestIndex = findSmallest(arr);
    newArr.push(...arr.splice(smallestIndex, 1));
  }

  return newArr;
}

console.log(orderBySelection([5, 3, 6, 2, 10]));