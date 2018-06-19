function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(data)
}
const doneColumn = document.querySelector("#done")
doneColumn.ondragover = allowDrop;
const doingColumn = document.querySelector("#doing")
doingColumn.ondragover = allowDrop;
const toDoColumn = document.querySelector("#toDo")
toDoColumn.ondragover = allowDrop;
const allBoxes = document.getElementsByClassName("box");
for (let i=0; i < allBoxes.length; i++) {
allBoxes[i].ondragstart = drag;
}
toDoColumn.ondrop = drop;
doneColumn.ondrop = drop;
doingColumn.ondrop = drop;