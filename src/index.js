// typical-arrays-problem
exports.min = function min (array) {
  let res;

  if(array && array.length !== 0) {
  res = Math.min.apply(null, array);
  return res;
  
  } else return 0;
};

exports.max = function max (array) {
  let res;

  if(array && array.length !== 0) {
  res = Math.max.apply(null, array);
  return res;

  } else return 0;
};

exports.avg = function avg (array) {
  let sumOfNumbers = null;
  let res;

  if(array && array.length !== 0) {
  array.forEach(element => {
    sumOfNumbers += element; 
    return sumOfNumbers;
  });

  res = sumOfNumbers/array.length;
  return res;

} else return 0;
};
