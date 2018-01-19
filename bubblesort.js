function swap(array, position) {
  var a = array[position];
  var b = array[position + 1];

  array[position] = b;
  array[position + 1] = a;
  // console.log(array);
  // console.log(a);
  // console.log(b);
}

function compare(a, b) {
  return a > b ? 1 : -1;
}

function bubbleSort(array, fn) {
  if (!fn) {
    fn = compare;
  }
  // if (!Array.isArray(array)) return;
  var swapCalledCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      var cambiar = fn(array[i], array[i + 1]);
      if (cambiar === 1) {
        swap(array, i);
        swapCalledCount++;
      }
    } else {
      if (swapCalledCount > 0) {
        bubbleSort(array, fn);
      }
    }
  }
  return array;
}
