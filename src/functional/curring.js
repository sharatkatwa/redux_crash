// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

const add = (a) => (b) => a + b;

// const c = add(1);
// c(2);

add(1)(3);
