const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
console.log(todoForm);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = todoInput.value;

  if (!!inputVal) {
    const task = document.createElement("li");
    task.textContent = inputVal;
    const btnDelete = document.createElement("button");
    btnDelete.addEventListener("click", (e) => {
      task.remove();
    });
    task.append(btnDelete);
    todoList.append(task);
    todoInput.value = "";
  }
});
