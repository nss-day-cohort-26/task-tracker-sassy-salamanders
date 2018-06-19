const databaseFunction = require("./database");
// prototypeObject = {
//     newTask: function () {
//         return this.name + summary+due+statusLocation
//     }
// }
const taskList = Object.create({}, {
    listArray: {
        value: []
    },
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
            this.listArray.push(newTask);
        }
    }
})
taskList.createTask("get happy", "coding stressing me out", "2/2/2018", "to do");
taskList.createTask("new pet", "get pet salamander", "2/2/2019", "to do");
console.log(taskList.listArray)

//console.log("list array", listArray)
databaseFunction.saveDatabase(taskList.listArray, "ArrayOfTasks")
console.log(databaseFunction.saveDatabase)

module.exports = taskList;
