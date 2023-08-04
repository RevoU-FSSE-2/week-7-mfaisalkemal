"use strict";
var btn = document.getElementById("btn"); //Type assertion
var input1 = document.getElementById("name");
var input2 = document.getElementById("details");
var input3 = document.getElementById("amount");
var type1 = document.getElementById("type");
var form = document.querySelector("form");
var list = document.getElementById("financial_tracker_list");
var todos = readTodos();
todos.forEach(createTodo);
// Load todos from local storage
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// Save todos to local storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
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
function createTodo(todo) {
    var newLI = document.createElement("li");
    newLI.append(todo.text0 + " " + todo.text1 + " " + todo.text2 + " "
        + " sebesar Rp. " + " " + todo.text3);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
