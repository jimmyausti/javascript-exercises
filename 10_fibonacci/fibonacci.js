const fibonacci = function(n) {
  n = parseInt(n, 10);

  if (isNaN(n) || n <= 0) {
    return 'OOPS';
  }

  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let next = a + b;
      a = b;
      b = next;
    }
    return b;
  }
};

// Do not edit below this line
module.exports = fibonacci;
