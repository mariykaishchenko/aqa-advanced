const array = [10, 20, 30, 40, 50];
const sum = array.reduce((acc, item) => {
  return item + acc;
}, 0);

console.log(sum);
