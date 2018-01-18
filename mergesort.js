function split(array) {
  var center = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, center);
  var secondHalf = array.slice(center);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  var auxarray = [];
  while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] > secondHalf[0]) {
      auxarray.push(secondHalf.shift());
    } else {
      auxarray.push(firstHalf.shift());
    }
  }
  return auxarray.concat(firstHalf, secondHalf);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  var initial = split(array);
  var orderedarray = merge(mergeSort(initial[0]), mergeSort(initial[1]));
  return orderedarray;
}
var xxx = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(xxx));
