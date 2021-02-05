// Task properties

function Task(id, description, button, completed) {

    this.id = id;
    this.description = description;
    this.button = button;
    this.completed = completed;
}


// Functions

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