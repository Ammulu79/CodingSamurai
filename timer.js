document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.getElementById('task-input');
        const taskDate = document.getElementById('task-date');

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskInput.value} - ${taskDate.value} <button class="complete-btn">Complete</button> <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskDate.value = '';

        taskItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskItem.querySelector('.edit-btn').addEventListener('click', () => {
            taskInput.value = taskItem.childNodes[0].textContent.split(' - ')[0];
            taskDate.value = taskItem.childNodes[0].textContent.split(' - ')[1];
            taskList.removeChild(taskItem);
        });

        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    });
});
