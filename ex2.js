var Tasks = [];
function addTask(task) {
    var length = Tasks.push(task);
    console.log(task + "has been added to our task list");
    return length;
}
console.log(addTask("Eat"));
