const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	{
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
