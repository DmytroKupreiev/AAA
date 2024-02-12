interface TodoInterface{
    Tasks:string[];
    addTask(task:string):number;

}

class TodoClass implements TodoInterface{
    Tasks:string[] = [];

    addTask (task:string):number {
        let length:number = this.Tasks.push(task);
        console.log(task + "has beeen added to our task list!");
        return length;
    }

}

let MyTodo = new TodoClass();
MyTodo.addTask("sleep");
