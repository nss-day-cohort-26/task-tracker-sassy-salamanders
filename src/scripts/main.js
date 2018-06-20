let databaseFunction = require("./database");
const allTasks = databaseFunction.pullFromStorage("ArrayOfTasks");
console.log("pulled from storage", allTasks)

function makeBox() {
  for (let i = 0; i < allTasks.length; i++) {
    let box = document.createElement("div")
    let header = document.createElement("h4")
    console.log("allTasks[i]", allTasks[i].name)
    header.appendChild(document.createTextNode(allTasks[i].name))
    box.appendChild(header)
    console.log("lets see", allTasks[i])
    document.getElementById("toDo").setAttribute("box", draggable="true")
    document.getElementById("toDo").appendChild(box)
  }
}
makeBox()