function login() {
    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "index.html";
}

// Handle Add Task Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");

    if (taskForm) {
        taskForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const taskName = document.getElementById("taskName").value;
            const taskDescription = document.getElementById("taskDescription").value;
            const taskStatus = document.getElementById("taskStatus").value;
            const taskDueDate = document.getElementById("taskDueDate").value;
            const taskTeam = document.getElementById("taskTeam").value;

            const newTask = {
                name: taskName,
                description: taskDescription,
                status: taskStatus,
                dueDate: taskDueDate,
                team: taskTeam
            };

            // Save task to localStorage
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            alert("Task Added Successfully!");
            taskForm.reset();
        });
    }
});

// Load tasks on respective pages
function loadTasks(status) {
    const taskContainer = document.getElementById("taskList");
    if (!taskContainer) return;

    taskContainer.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const filteredTasks = tasks.filter(task => task.status === status);

    filteredTasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <h3>${task.name} (${task.team})</h3>
            <p>${task.description}</p>
            <p><strong>Due Date:</strong> ${task.dueDate}</p>
        `;
        taskContainer.appendChild(taskElement);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

document.getElementById("taskForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value;
    const priority = document.getElementById("priority").value;
    const team = document.getElementById("team").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;

    const task = {
        taskName,
        priority,
        team,
        dueDate,
        status
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task added successfully!");
    window.location.href = "dashboard.html";
});

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const sections = {
        todo: document.getElementById("todoTasks"),
        inprogress: document.getElementById("inprogressTasks"),
        pending: document.getElementById("pendingTasks"),
        finished: document.getElementById("finishedTasks"),
    };

    for (const section in sections) {
        sections[section].innerHTML = "";
    }

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <h3>${task.taskName}</h3>
            <p>Priority: <strong>${task.priority}</strong></p>
            <p>Team: <strong>${task.team}</strong></p>
            <p>Due: <strong>${task.dueDate}</strong></p>
        `;
        sections[task.status].appendChild(taskElement);
    });
}
