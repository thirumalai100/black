document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('taskChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['To-Do', 'In Progress', 'Pending', 'Finished'],
            datasets: [{
                label: 'Tasks',
                data: [5, 3, 4, 8], // Example data
                backgroundColor: ['red', 'yellow', 'blue', 'green']
            }]
        }
    });
});
