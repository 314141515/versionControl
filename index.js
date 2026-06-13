const todos = [];

function addTodo(text, dueDate) {
  todos.push({ id: Date.now(), text, done: false, dueDate });
  console.log(`Added: "${text}" (due: ${dueDate})`);
}

function listTodos() {
  if (todos.length === 0) return console.log("No todos!");
  todos.forEach(t => console.log(`[${t.done ? "x" : " "}] ${t.id}: ${t.text}`));
}

function completeTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) { todo.done = true; console.log(`Completed: "${todo.text}"`); }
}

addTodo("Learn Git", "2024-01-15");
addTodo("Build Todo App", "2024-01-20");
listTodos();

function deleteTodo(id) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) { todos.splice(index, 1); console.log(`Deleted todo ${id}`); }
}

console.log("Total todos:", todos.length);
module.exports = { addTodo, listTodos, completeTodo, deleteTodo };