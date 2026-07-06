const axios = require("axios");

class TodoController {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/todos",
      validateStatus: () => true,
    });
  }

  getTodos() {
    return this.axiosInstance.get();
  }

  getTodo(todoId) {
    return this.axiosInstance.get(`/${todoId}`);
  }

  deleteTodo(todoId) {
    return this.axiosInstance.delete(`/${todoId}`);
  }

  createTodo(todo) {
    return this.axiosInstance.post("", todo);
  }

  updateTodo(todoId, todo) {
    return this.axiosInstance.put(`/${todoId}`, todo);
  }
}

module.exports = new TodoController();
