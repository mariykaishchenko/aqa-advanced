const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 11];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    zeroCount++;
  } else if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  }
}

console.log("Positive numers count", positiveCount);
console.log("Negative numbers count", negativeCount);
console.log("Zero numbers count", zeroCount);
