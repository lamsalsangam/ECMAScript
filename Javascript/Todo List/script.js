const form = document.getElementById("addForm");
const input = document.getElementById("item");
const list = document.getElementById("todoList");

renderList();

form.addEventListener("submit", addItem);
list.addEventListener("click", removeItem);

async function addItem(event) {
  event.preventDefault();
  if (input.value !== "") {
    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input.value }),
    });
    const todo = await response.json();
    renderListItem(todo);
    input.value = "";
  }
}

async function removeItem(event) {
  if (event.target.nodeName === "BUTTON") {
    const li = event.target.parentElement;
    const id = li.dataset.id;
    await fetch(`/api/todo/${id}`, { method: "DELETE" });
    li.remove();
  }
}

async function renderList() {
  const response = await fetch("/api/todo");
  const todos = await response.json();
  todos.forEach((todo) => {
    renderListItem(todo);
  });
}

function renderListItem(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo._id;
  li.innerHTML = `<span>${todo.text}</span><button>X</button>`;
  list.appendChild(li);
}
