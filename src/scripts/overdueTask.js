let due = new Date("07/07/2018"),
now = new Date();
if(now > due) {
    console.log("This task is past due")
}
console.log("this is the due date", due);