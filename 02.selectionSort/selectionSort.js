const findSmallestIndex = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const arrayLength = array.length;
  const newArr = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const smallestIndex = findSmallestIndex(array);

    newArr.push(array[smallestIndex]);
    array.splice(smallestIndex, 1);
  }

  return newArr;
};

const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));
