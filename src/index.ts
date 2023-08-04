interface Todo {
  text0: string;
  text1: string;
  text2: string;
  text3: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement; //Type assertion
const input1 = document.getElementById("name")! as HTMLInputElement;
const input2 = document.getElementById("details")! as HTMLInputElement;
const input3 = document.getElementById("amount")! as HTMLInputElement;
const type1 = document.getElementById("type")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("financial_tracker_list")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

// Load todos from local storage
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

// Save todos to local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text0: type1.value,
    text1: input1.value,
    text2: input2.value,
    text3: input3.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  type1.value = "";
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  newLI.append( todo.text0 + " " + todo.text1 + " " + todo.text2 + " "
  + " sebesar Rp. " + " " + todo.text3);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);