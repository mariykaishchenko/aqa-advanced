const TodoController = require("../controllers/TodoController");

describe("Todos", () => {
  test("Get all todos", async () => {
    const response = await TodoController.getTodos();

    expect(response.status).toBe(200);
    expect(response.data).toHaveLength(200);
  });

  test("Get single todo", async () => {
    const todoId = 1;
    const response = await TodoController.getTodo(todoId);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(todoId);
  });

  test("Create todo", async () => {
    const title = "TEST TITLE";
    const completed = false;
    const userId = 1;

    const response = await TodoController.createTodo({
      title,
      userId,
      completed,
    });

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(title);
    expect(response.data.userId).toBe(userId);
    expect(response.data.completed).toBe(completed);
  });

  test("Update todo", async () => {
    const title = "NEW TEST TITLE";
    const completed = true;

    const response = await TodoController.updateTodo(11, { title, completed });

    expect(response.status).toBe(200);
    expect(response.data.title).toBe(title);
    expect(response.data.completed).toBe(completed);
  });

  test("Delete todo", async () => {
    const response = await TodoController.deleteTodo(11);
    expect(response.status).toBe(200);
  });
});
