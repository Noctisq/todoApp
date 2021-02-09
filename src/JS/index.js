
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
    if(newTasks.length == 0 ){
        localStorage.setItem("tasks", newTasks);
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    printTasks(newTasks);
}

function printTasks(tasks) {
    document.querySelector("#taskDiv").innerHTML = "";
    tasks.forEach(task => {
        console.log(task)
        if (task.completed) {
            document.querySelector("#taskDiv").innerHTML += `<div><p id = "#task${task.id}" style = "text-decoration: line-through"> <input type="checkbox" class = "check" checked>${task.desc} <button class = "Delete">delete</button></p></div>`;
        } else {
            document.querySelector("#taskDiv").innerHTML += `<div><p id = "#task${task.id}"> <input type="checkbox" class = "check" >${task.desc} <button class = "Delete">delete</button></p></div>`;
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
    console.log(btn.srcElement.parentNode.id);
    const tasks = getTasks();
    const filteredTasks = tasks.filter(task => `#task${task.id}` != btn.srcElement.parentNode.id);
    console.log(filteredTasks);
    updateTasks(filteredTasks);

// Function Update Tasks
function updateTasks(newTasks) {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    printTasks(newTasks);
}

// Function Print Tasks
function printTasks(tasks) {
    document.querySelector("#taskDiv").innerHTML = "";
    tasks.forEach(task => {
        console.log(task)
        if (task.completed) {
            document.querySelector("#taskDiv").innerHTML += `<p id = "#task${task.id}" style = "text-decoration: line-through"> <input type="checkbox" class = "check" checked>${task.description} <button class = "Delete">delete</button></p>`;
        } else {
            document.querySelector("#taskDiv").innerHTML += `<p id = "#task${task.id}"> <input type="checkbox" class = "check" >${task.description} <button class = "Delete">delete</button></p>`;
        }
    });

    document.querySelectorAll(".Delete").forEach(btn => {
        btn.addEventListener('click', deleteTask);
    });
    document.querySelectorAll(".check").forEach(input => {
        input.addEventListener("change", underlineTask)
    });
}

function underlineTask(input) {



    let tasks = getTasks().map(task => {

        if (input.target.parentNode.id == `#task${task.id}`) {
            task.completed = !task.completed;
        }
        return task;
    });

    updateTasks(tasks);

}

function makeUI() {

    let tasks = [];

    // Crear elementos para pintar UI
    const newDiv = document.createElement("div");
    const tasksDiv = document.createElement("div");

    const inputTask = document.createElement("input");
    const appDiv = document.querySelector("#app");
    const btnApp = document.createElement("button");

    tasksDiv.id = "taskDiv"
    btnApp.textContent = "Add";
    btnApp.id = "add";
    inputTask.id = "task";

    newDiv.appendChild(inputTask);
    newDiv.appendChild(btnApp);
    appDiv.appendChild(newDiv);
    appDiv.appendChild(tasksDiv);

    btnApp.addEventListener("click", addTask);


    if (!localStorage.hasOwnProperty('tasks')) {
        updateTasks(tasks);

    } else {
        printTasks(getTasks());
    }

}


makeUI();


