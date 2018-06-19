const array = require("taskList");
const saveDatabase = function (databaseObject, localStorageKey) {
​
  const stringifiedDatabase = JSON.stringify(databaseObject)
​
  console.log("database object", databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}
​
saveDatabase(listArray, "ArrayOfTasks")
