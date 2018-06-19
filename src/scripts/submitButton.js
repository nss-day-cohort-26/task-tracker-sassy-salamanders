let taskListFunction = require("./taskList")

function inputForm () {
    const todo= document.getElementById("todoInput").value;
    const description = document.getElementById("todoDescription").value;
    taskListFunction.createTask(todo, description)
    console.log("TEST", taskListFunction);
    // const header = document.createTextNode(todo)
    // const text = document.createTextNode(description);
    // const newItem = document.createElement("li")
    // console.log(newItem, "New Item")
    // newItem.appendChild(header);
    // newItem.appendChild(text);
    // document.getElementById("todoList").appendChild(newItem)

  }
document.getElementById("submit-button").addEventListener("click", inputForm);
console.log(taskListFunction)


taskListFunction.createTask("Say hello", "I'm dexcribing here", "04/15/2018", "to do");
console.log(taskListFunction);