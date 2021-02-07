// Task properties

function Task(id, description, completed) {

    this.id = id;
    this.description = description;
    this.completed = completed;
}


// Functions

// Function Get Tasks


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

function makeUI() {

    // Crear elementos para pintar UI
    const newDiv = document.createElement("div");
    const inputTask = document.createElement("input");
    const appDiv = document.querySelector("#app");
    const btnApp = document.createElement("button");

    // Boton para agregar tareas
    btnApp.textContent = "Add";
    btnApp.id = "add";

    // Input para las tareas
    inputTask.id = "task";
    newDiv.appendChild(inputTask);
    newDiv.appendChild(btnApp);
    appDiv.appendChild(newDiv);


    btnApp.addEventListener("click", addTask);
}


makeUI();