//function todoList () {
   // const item = document.getElementById("todoInput").value
   // const text = document.createTextNode(item)
   // const newItem = document.createElement("li")
   // newItem.appendChild(text)
   // document.getElementById("todoList").appendChild(newItem)
 // }
 const fill = document.querySelector("#toDo");
 const empties = document.querySelectorAll(".wrapper");
 //fill listeners
fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)
//loop through empties and call drag events
for(const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
  // drag functions
function dragStart() {
  console.log("start");
  this.className += "hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver (e) {
  e.preventDefault();
}
function dragEnter (e) {
  e.preventDefault();
  this.className += "hovered";
}
function dragLeave () {
  this.className = "empty";
}
function dragDrop () {
  this.className = "empty"
  this.append(fill); }