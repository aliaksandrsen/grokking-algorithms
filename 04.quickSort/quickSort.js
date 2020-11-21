const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater));
};

const testArray = [123, 2, 332, 44, 5, 65, 7, 8555, 9];
console.log(quickSort(testArray));
