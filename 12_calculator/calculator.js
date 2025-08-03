const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1)
};

const power = function(x, y) {
  return Math.pow(x, y)
};

const factorial = function(x) {
  let fact = 1
  for (let i = 1; i <= x; i++){
    fact *= i
  }	
  return fact
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
