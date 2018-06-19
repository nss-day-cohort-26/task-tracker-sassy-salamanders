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

module.exports = taskList;
  console.log("list array", listArray)
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
   console.log("database object", databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(listArray, "ArrayOfTasks")



// function writeTaskToDom = () => {
//       for (let i = 0; i < )
//   }
