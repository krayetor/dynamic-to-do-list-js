// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        //  Retrieving and triming the value from the task input field.
        const taskText = taskInput.value.trim();

        // Checking if task is not empty
        if (taskText === "") {
           alert('Please enter a task!');
           return; 
        }

        // Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append button and task
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        
        // clear input field
        taskInput.value = "";
    }

    // Attaching Event Listeners
    taskInput.addEventListener('click', addTask);

    // Allow pressing the "Enter" to add tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


});