// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // function to Initialize and Load Tasks
    function saveTasks() {

        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            let taskText = li.textContent.replace('Remove', '').trim();
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function createTaskElement(taskText) {

        const li = document.createElement('li');
        const removeBtn = document.createElement('button');

        li.textContent = taskText;
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
            saveTasks();
        });

        li.appendChild(removeBtn);
        return li;
    }

    function addTaskFromInput() {
        
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert('Please enter a task!');
            return;
        }

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);

        taskInput.value = "";
        saveTasks();
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
        });
    }

    // Attaching Event Listeners
    addButton.addEventListener('click', addTaskFromInput);

    // Allow pressing the "Enter" to add tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTaskFromInput();
        }
    });


    loadTasks();
    
});