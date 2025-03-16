document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");

    if (taskForm) {
        taskForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get values from form inputs
            const taskName = document.getElementById("taskName").value.trim();
            const priority = document.getElementById("priority").value;
            const team = document.getElementById("team").value;
            const dueDate = document.getElementById("dueDate").value;
            const status = document.getElementById("status").value;

            // Validation: Ensure task name and due date are filled
            if (taskName === "" || dueDate === "") {
                alert("Please fill in all required fields.");
                return;
            }

            // Create task object
            const task = {
                name: taskName,
                priority: priority,
                team: team,
                dueDate: dueDate,
                status: status,
            };

            // Retrieve existing tasks from localStorage
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);

            // Save updated task list back to localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));

            // Show confirmation popup
            alert("Task successfully added!");

            // Clear form fields after submission
            taskForm.reset();
        });
    } else {
        console.error("Task form not found. Check if the form ID is correct.");
    }
});
