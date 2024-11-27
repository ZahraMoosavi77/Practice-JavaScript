setTimeout(() => console.log(1));
console
  .log(2)(new Promise((r, j) => r()))
  .then(() => console.log(3));
console.log(4);
setTimeout(() => console.log(5), 0);

// in call stack
// set ,
