let a = sumOf(5, 4, 8, 3, 1);
let b = sumOf(1, 2);

function sumOf(...rest) {
  console.log(rest);
  console.log(arguments);
  return rest.reduce((a, c) => a + c, 0);
}
// rest در توابع همیشه آرایه است