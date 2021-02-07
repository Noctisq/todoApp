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
            document.querySelector("#taskDiv").innerHTML += `<p id = "#task${task.id}" class = "underlineTask"> <input type="checkbox" class = "check" checked >${task.desc} <button class = "Delete deleteBtn">delete</button></p>`;
        } else {
            document.querySelector("#taskDiv").innerHTML += `<p id = "#task${task.id}" > <input type="checkbox" class = "check" >${task.desc} <button class = "Delete deleteBtn" >delete</button></p>`;
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

function makeUI() {

    let tasks = [];

    // Se crean elementos para ingresar en el UI

    const newDiv = document.createElement("div");
    const tasksDiv = document.createElement("div");

    //Contenido del div general para escribir y agregar tareas

    const inputTask = document.createElement("input");
    const appDiv = document.querySelector("#app");
    const btnApp = document.createElement("button");
    
    //Se agregan en el DOM los elementos creados 

    tasksDiv.id = "taskDiv"
    btnApp.textContent = "Add";
    btnApp.id = "add";
    inputTask.id = "task";
    newDiv.appendChild(inputTask);
    newDiv.appendChild(btnApp);
    appDiv.appendChild(newDiv);
    appDiv.appendChild(tasksDiv);

    btnApp.addEventListener("click", addTask);

    //Comprobación del almacenamiento local

    if (!localStorage.hasOwnProperty('tasks')) {
        updateTasks(tasks);

    } else {
        printTasks(getTasks());
    }
}


makeUI();