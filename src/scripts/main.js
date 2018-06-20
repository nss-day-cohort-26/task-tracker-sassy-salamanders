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
    box.setAttribute("draggable", "true")
    box.className = "box"
    box.id = i
    document.getElementById("toDo").appendChild(box)
    console.log("box", box)
  }
}
makeBox()