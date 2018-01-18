function swap(array, position) {
  var a = array[position];
  var b = array[position + 1];

  array[position] = b;
  array[position + 1] = a;
  console.log('hola');
}

function compare(a, b) {
  return a > b;
}

function bubbleSort(array) {
  console.log(array);
  // if (!Array.isArray(array)) return;
  var swapCalledCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      var cambiar = compare(array[i], array[i + 1]);
      if (cambiar) {
        swap(array, i);
        swapCalledCount++;
      }
    } else {
      if (swapCalledCount > 0) {
        bubbleSort(array);
      }
    }
  }

  return array;
}
