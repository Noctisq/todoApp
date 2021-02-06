// Task prototype 

function Task(id, desc, completed) {

    this.id = id;
    this.desc = desc;
    this.completed = completed;
}

// functions


function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    return tasks;
}

function updateTasks(newTasks) {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    printTasks(newTasks);
}

function printTasks(tasks) {
    document.querySelector("#taskDiv").innerHTML = "";
    tasks.forEach(task => {
        console.log(task)
        if (task.completed) {
            document.querySelector("#taskDiv").innerHTML += `<p id = "#task${task.id}" style = "text-decoration: line-through; display: flex; justify-content: center; margin: 25px"> <input type="checkbox" class = "check" checked >${task.desc} <button class = "Delete" style= "border-radius: 2em; background-color: #a00000; color: white; width: 60px; border-color: white">delete</button></p>`;
        } else {
            document.querySelector("#taskDiv").innerHTML += `<p id = "#task${task.id}" style = "display: flex; justify-content: center; margin: 25px;"> <input type="checkbox" class = "check" >${task.desc} <button class = "Delete" style= "background-color: #a00000; border-radius: 2em; color: white; width: 60px; border-color: white;">delete</button></p>`;
        }


    });

    document.querySelectorAll(".Delete").forEach(btn => {
        btn.addEventListener('click', deleteTask);
    });
    document.querySelectorAll(".check").forEach(input => {
        input.addEventListener("change", underlineTask)
    });


}

function addTask() {

    let tasks = getTasks();
    const taskdesc = document.querySelector("#task").value;
    if (!taskdesc.trim()) {
        return alert('add a task');
    }
    const task = new Task(tasks.length, taskdesc, false);
    tasks.push(task);
    updateTasks(tasks);
    document.querySelector("#task").value = "";
    printTasks(tasks);

}


function deleteTask(btn) {
    const idbutton =btn.srcElement.parentNode.id; //se almacena en una variable el id del elemento
    const tasks = getTasks();   //Se traen todos los elementos
    const filteredTasks = tasks.filter(task => `#task${task.id}` !=idbutton);  //Se filtran los elementos, se elimina si hay una coincidencia de id
    updateTasks(filteredTasks); //Se actualiza la lista
}


function underlineTask(input) {
    let tasks = getTasks().map(task => {
        if (input.target.parentNode.id == `#task${task.id}`){
            task.completed = !task.completed;}
        return task;
    });
    updateTasks(tasks);
}