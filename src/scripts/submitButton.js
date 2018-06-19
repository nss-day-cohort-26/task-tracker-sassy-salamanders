function todoList () {
    const item = document.getElementById("todoInput").value
    const text = document.createTextNode(item)
    const newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
  }