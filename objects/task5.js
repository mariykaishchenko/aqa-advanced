const users = [{
    name: "Alex",
    email: "alex.a@gmail.com",
    age: 25
}, {
    name: "John",
    email: "john.a@gmail.com",
    age: 28
}, {
    name: "Kevin",
    email: "kevin.a@gmail.com",
    age: 29
}];

for (const user of users) {
    const { name, email, age } = user;
    console.log(name);
    console.log(email);
    console.log(age);
}