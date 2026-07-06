async function getToDo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    return response.json();
}

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    return response.json();
}

async function task3() {
    const [toDo, user] = await Promise.all([getToDo(), getUser()]);

    console.log("Promise.all result:")
    console.log(toDo);
    console.log(user);

    const firstResult = await Promise.race([getToDo(), getUser()]);
    console.log("Promise.race result:")
    console.log(firstResult);
}

task3();