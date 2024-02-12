var TodoClass = /** @class */ (function () {
    function TodoClass() {
        this.Tasks = [];
    }
    TodoClass.prototype.addTask = function (task) {
        var length = this.Tasks.push(task);
        console.log(task + "has beeen added to our task list!");
        return length;
    };
    return TodoClass;
}());
var MyTodo = new TodoClass();
MyTodo.addTask("sleep");
