const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === item) return mid;

    if (guess < item) {
      low = mid + 1;
    }

    if (guess > item) {
      high = mid - 1;
    }
  }
  return null;
};

const searchValue = 7;
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("result", binarySearch(testArray, searchValue));
