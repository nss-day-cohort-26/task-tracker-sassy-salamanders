let databaseFunction = require("./database");
const allTasks = databaseFunction.pullFromStorage("ArrayOfTasks");

function makeBox() {
  for (let i = 0; i < allTasks.length; i++) {
    let box = document.createElement("div")
    let header = document.createElement("h4")
    header.appendChild(document.createTextNode(allTasks[i].name))
    box.appendChild(header)
    box.setAttribute("draggable", "true")
    box.id = [i]
    box.className = "box"
    document.getElementById("toDo").appendChild(box)
    console.log(box)
  }
}
makeBox()