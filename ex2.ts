let Tasks:string[]=[];

function addTask(task:string):number{
    let length:number = Tasks.push(task);
    console.log(task + "has been added to our task list");
    return length;
} 

function listAllTasks():void{
    Tasks.forEach((item)=>{
        console.log("Taks:"+item+"is in my tasks list.");
    })

}

function deleteTask(task:string):number{
    let index:number = Tasks.indexOf(task);

if(index >-1){
    Tasks.splice(index,1);
    console.log(task +"has been removed from our Task List.")
} else {
    console.log(task + "was not in our  Task list")
}
    return Tasks.length;
}

console.log(addTask("Eat"));
addTask ("Work");
listAllTasks();
deleteTask("Eat");
deleteTask("Sleep");
listAllTasks();
