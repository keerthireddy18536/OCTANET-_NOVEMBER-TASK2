// Get elements from the DOM
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to create a new to-do item
function createTodoItem(task) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    label.classList.toggle("completed", this.checked);
  });

  label.textContent = task;

  li.appendChild(checkbox);
  li.appendChild(label);
  
  todoList.appendChild(li);
}

// Event listener for form submission
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();

  if (task !== "") {
    createTodoItem(task);
    todoInput.value = "";
  }
});
