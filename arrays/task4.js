const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = array.filter((item) => {
    return item % 2 === 0;
});

console.log(filteredArray);