let databaseFunction = require("./database");
const allTasks = databaseFunction.pullFromStorage("ArrayOfTasks");
console.log(allTasks)
for (let i =0; i < allTasks.length; i++) {
  const newH2 = document.createElement("h2")
  const todo = document.querySelector("#todoInput")
  newH2.appendChild(todo)
}
console.log("lets see", allTasks[i])