const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copyList = numbersList.slice();
copyList.sort((a, b) => {
  return a - b;
});

console.log(numbersList);
console.log(copyList);
