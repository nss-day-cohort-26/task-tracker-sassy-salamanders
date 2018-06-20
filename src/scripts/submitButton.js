let taskListFunction = require("./taskList")
let databaseFunction = require("./database");
let dom = require("./domBuilder");
const allTasks = databaseFunction.pullFromStorage("ArrayOfTasks");

function inputForm () {
    const todo= document.getElementById("todoInput").value;
    const dueDay= document.getElementById("daydropdown").value
    const dueMonth= document.getElementById("monthdropdown").value
    const dueYear = document.getElementById("yeardropdown").value
    const dueDate = dueDay + " " + dueMonth + ", " + dueYear;
    const description = document.getElementById("todoDescription").value;
    taskListFunction.createTask(todo, description, dueDate, "to do");
  }
// document.getElementById("submit-button").addEventListener("click", inputForm)
document.getElementById("submit-button").addEventListener("click", () => {
  inputForm();
  dom();
});

