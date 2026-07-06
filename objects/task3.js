const car1 = {
  brend: "BMW",
  model: 3,
  year: 2025,
};

const car2 = {
  brend: "Fiat",
  model: 500,
  owner: "Ivan",
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
