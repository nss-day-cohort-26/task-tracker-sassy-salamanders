const databaseFunction = require("./main");
const listArray = []
prototypeObject = {
    newTask: function () {
        return this.name + summary+due+statusLocation
    }
}
const taskList = Object.create (prototypeObject, {
    createTask: {
          value: function (taskName, description, dueDate, location) {
              let newTask = Object.create(null, {
                  name: {
                      value: taskName,
                      writable: true,
                      enumerable: true,
                  },
                  summary: {
                      value: description,
                      writable: true,
                      enumerable: true,
                  },
                  due: {
                      value: dueDate,
                      writable: true,
                      enumerable: true,
                  },
                  statusLocation: {
                      value: location,
                      writable: true,
                      enumerable: true,
                  }
              })
            listArray.push(newTask);
            }
   }
  })
  taskList.createTask("get drunk", "coding stressing me out", "2/2/2018", "to do");
  taskList.createTask("new pet", "get pet salamander", "2/2/2019", "to do");
  console.log(listArray)

  //console.log("list array", listArray)
 databaseFunction.saveDatabase(listArray, "ArrayOfTasks")
 console.log(databaseFunction.saveDatabase)

<<<<<<< HEAD
//store the array list to Local Storage__________________________________________________________
const saveDatabase = function (databaseObject, localStorageKey) {

    const stringifiedDatabase = JSON.stringify(databaseObject)

    console.log("stored to local storage", databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(listArray, "ArrayOfTasks")

//____________LOAD THE ARRAY LIST FROM LOCAL STORAGE______________________________________
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// pull database back from local storage
let allTheStuff = loadDatabase("ArrayOfTasks");

console.log("This is the array list of tasks", allTheStuff);

// function writeTaskToDom = () => {
//       for (let i = 0; i < )
//   }
=======
>>>>>>> master
