const form = document.getElementById("addForm");
const input = document.getElementById("item");
const list = document.getElementById("todoList");
let items = JSON.parse(localStorage.getItem("todoList")) || [];

renderList();

form.addEventListener("submit", addItem);
list.addEventListener("click", removeItem);

function addItem(event) {
  event.preventDefault();
  if (input.value !== "") {
    items.push(input.value);
    localStorage.setItem("todoList", JSON.stringify(items));
    renderList();
    input.value = "";
  }
}

function removeItem(event) {
  if (event.target.nodeName === "BUTTON") {
    const index = Array.from(
      event.target.parentElement.parentElement.children
    ).indexOf(event.target.parentElement);
    items.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(items));
    renderList();
  }
}

function renderList() {
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item}</span><button>X</button>`;
    list.appendChild(li);
  });
}
