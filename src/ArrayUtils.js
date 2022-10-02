function isSorted(arr) {
  if (arr[0] !== 1) return false;

  for (let i = 0; i < arr.length; i++) if (arr[i] !== i + 1) return false;

  return true;
}

export function shuffle(arr) {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

export function freshArray(arrSize) {
  let newArr = [];

  for (let i = 0; i < arrSize; i++) newArr.push(i + 1);

  newArr = shuffle(newArr);

  if (isSorted(newArr)) [newArr[0], newArr[1]] = [newArr[1], newArr[0]];

  return newArr;
}

export function calcHeight(num, arrSize) {
  return (num / arrSize) * 100 + 20;
}
