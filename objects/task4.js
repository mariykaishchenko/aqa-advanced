const person = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
};

person.email = "john.doe@gamil.com";

delete person.age;

console.log(person);
