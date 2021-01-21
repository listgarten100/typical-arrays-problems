// typical-arrays-problem
exports.min = function min (array) {
  if(array && array.length !== 0) {
  let res;
  res = Math.min.apply(null, array);
  return res;
  } else {
    return 0;
  }
};

exports.max = function max (array) {
  if(array && array.length !== 0) {
  let res;
  res = Math.max.apply(null, array);
  return res;
  } else {
    return 0;
  }
};

exports.avg = function avg (array) {
  if(array && array.length !== 0) {
  let sumOfNumbers = null;
  let res;
  array.forEach(element => {
    sumOfNumbers += element; 
    return sumOfNumbers;
  });
  res = sumOfNumbers/array.length;
  return res;
} else {
  return 0;
}
};
