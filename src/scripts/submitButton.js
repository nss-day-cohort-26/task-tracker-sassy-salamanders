//function todoList () {
   // const item = document.getElementById("todoInput").value
   // const text = document.createTextNode(item)
   // const newItem = document.createElement("li")
   // newItem.appendChild(text)
   // document.getElementById("todoList").appendChild(newItem)
 // }
let taskListFunction = require("./taskList")

function todoList () {
    const item = document.getElementById("todoInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    console.log(newItem, "New Item")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)

  }
document.getElementById("submit-button").addEventListener("click", todoList);
console.log(taskListFunction)

todoList()

