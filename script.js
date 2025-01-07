


const addButton = document.getElementById('add Task');
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList');


function addTask(){

    const task =taskInput.value.trim()
    if (task) {
        createTaskElement()
    }

}

function createTaskElement(Task) {

}