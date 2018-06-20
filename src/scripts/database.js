
const databaseFunction = Object.create(null, {
    saveDatabase: {
      enumerable: true,
      value: function (databaseObject, localStorageKey) {
        const stringifiedDatabase = JSON.stringify(databaseObject)
        console.log("stored to local storage", databaseObject)
        localStorage.setItem(localStorageKey, stringifiedDatabase)
      }
    },
    pullFromStorage: {
      enumerable: true,
      value: function (localStorageKey) {
        const databaseString = localStorage.getItem(localStorageKey)
       if (databaseString) {
        return JSON.parse(databaseString)
       } else if (!databaseString) {
          const ArrayOfTasks= []
          return ArrayOfTasks
       }
      }
    }
  })
  module.exports = databaseFunction