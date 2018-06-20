function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text")
    if (ev.target.id ==="toDo" || ev.target.id=== "doing" || ev.target.id === "done") {
    ev.target.appendChild(document.getElementById(data));
    }
    console.log("things", ev.target)
}
const doneColumn = document.querySelector("#done")
doneColumn.ondragover = allowDrop;
const doingColumn = document.querySelector("#doing")
doingColumn.ondragover = allowDrop;
const toDoColumn = document.querySelector("#toDo")
toDoColumn.ondragover = allowDrop;
const allBoxes = document.getElementsByClassName("box");
const elementClass = document.querySelectorAll(".box").className
for (let i=0; i < allBoxes.length; i++) {
allBoxes[i].ondragstart = drag;
}
toDoColumn.ondrop = drop;
doneColumn.ondrop = drop;
doingColumn.ondrop = drop;