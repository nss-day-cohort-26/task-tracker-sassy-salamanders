
const saveDatabase = function (databaseObject, localStorageKey) {
  /*
      Convert the Object into a string.
  */
  const stringifiedDatabase = JSON.stringify(databaseObject)

  /*
      Create a key in local storage, and store the string
      version of your inventory database as the value
  */
 console.log("database object", stringifiedDatabase)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}

module.exports = saveDatabase;