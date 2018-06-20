let taskListFunction = require("./taskList")
let databaseFunction = require("./database");
function inputForm () {
    const todo= document.getElementById("todoInput").value;
    const dueDay= document.getElementById("daydropdown").value
    const dueMonth= document.getElementById("monthdropdown").value
    const dueYear = document.getElementById("yeardropdown").value
    const dueDate = dueDay + " " + dueMonth + ", " + dueYear;
    const description = document.getElementById("todoDescription").value;
    taskListFunction.createTask(todo, description, dueDate, "to do");
    // const header = document.createTextNode(todo)
    // const text = document.createTextNode(description);
    // const newItem = document.createElement("li")
    // console.log(newItem, "New Item")
    // newItem.appendChild(header);
    // newItem.appendChild(text);
    // document.getElementById("todoList").appendChild(newItem)

  }
document.getElementById("submit-button").addEventListener("click", inputForm)


taskListFunction.createTask("Say hello", "I'm dexcribing here", "04/15/2018", "to do");

