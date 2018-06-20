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
    let description = document.createElement("p")
    description.appendChild(document.createTextNode(allTasks[i].summary))
    box.appendChild(description)
    let date = document.createElement("h5")
    date.appendChild(document.createTextNode(allTasks[i].due))
    box.appendChild(date)
    box.setAttribute("draggable", "true")
    box.className = "box"
    box.id = i
    document.getElementById("toDo").appendChild(box)
    console.log("box", box)
  }
}
makeBox()