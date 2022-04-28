console.log("Bubble Sort");

const arr = [0, 10, 4, 1, 3, 2, -1];

function bubbleSort(data) {
  let loopCount = 1;
  data = [...data];

  while (loopCount < data.length) {
    console.log("Durchlauf " + loopCount);
    for (let i = 0; i < data.length - 1; i++) {
      const a = data[i];
      const b = data[i + 1];

      if (a > b) {
        console.log(`Tausche ${a} und ${b}`);
        data[i] = b;
        data[i + 1] = a;
      }
    }
    loopCount++;
  }

  return data;
}

const arrSorted = bubbleSort(arr);
console.log(arrSorted);
console.log(arr);
