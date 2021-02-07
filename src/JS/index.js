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