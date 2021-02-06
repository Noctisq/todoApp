function deleteTask(btn) {
    const idbutton =btn.srcElement.parentNode.id; //se almacena en una variable el id del elemento
    const tasks = getTasks();   //Se traen todos los elementos
    const filteredTasks = tasks.filter(task => `#task${task.id}` !=idbutton);  //Se filtran los elementos, se elimina si hay una coincidencia de id
    updateTasks(filteredTasks); //Se actualiza la lista
}

function underlineTask(input) {
    let tasks = getTasks().map(task => {
        if (input.target.parentNode.id == `#task${task.id}`)
            task.completed = !task.completed;
        return task;
    });
    updateTasks(tasks);
}

