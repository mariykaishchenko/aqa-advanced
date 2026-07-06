function getToDo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            return response.json();
        });
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            return response.json();
        });
}

Promise.all([getToDo(), getUser()]).then(([toDo, user]) => {
    console.log("Promise.all result:")
    console.log(toDo);
    console.log(user);
});

Promise.race([getToDo(), getUser()]).then((firstResult) => {
    console.log("Promise.race result:")
    console.log(firstResult);
});