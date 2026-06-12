const todos = [];

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
  console.log(`Added: "${text}"`);
}

function listTodos() {
  if (todos.length === 0) return console.log("No todos!");
  todos.forEach(t => console.log(`[${t.done ? "x" : " "}] ${t.id}: ${t.text}`));
}

function completeTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) { todo.done = true; console.log(`Completed: "${todo.text}"`); }
}

addTodo("Learn Git");
addTodo("Build Todo App");
listTodos();

module.exports = { addTodo, listTodos, completeTodo };