const array = [1, 2, 3, 4, 5];
const newArray = array.map((item, index) => {
  return item * index;
});

console.log(newArray);
