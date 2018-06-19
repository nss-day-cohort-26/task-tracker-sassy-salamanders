
const databaseFunction = Object.create(null, {
  saveDatabase: {
    enumerable: true,
    value: function (databaseObject, localStorageKey) {
      console.log("Things are workign")
    const stringifiedDatabase = JSON.stringify(databaseObject)
    console.log("stored to local storage", databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
    }
  },
   pullFromStorage: {
    enumerable: true,
    value: function (localStorageKey) {
      const databaseString = localStorage.getItem(localStorageKey)
      return JSON.parse(databaseString)
    }
  }
})
 module.exports = databaseFunction


