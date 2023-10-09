const tasks = [];

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return timeString;
}

function getWeather() {
    return "22°C, Soligt";
}

function updateDateTime() {
    const timeElement = document.getElementById('time');
    const weatherElement = document.getElementById('weather');

    const currentTime = getCurrentTime();
    const currentWeather = getWeather();

    timeElement.textContent = `Aktuell tid: ${currentTime}`;
    weatherElement.textContent = `Väder: ${currentWeather}`;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function addTask(taskText) {
    tasks.push(taskText);
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function updateTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button class="remove">Remove</button>`;
        taskList.appendChild(li);

        li.querySelector('.remove').addEventListener('click', function () {
            removeTask(index);
            updateTaskList();
        });
    });
}

document.getElementById('add').addEventListener('click', function () {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;
    if (task) {
        addTask(task);
        taskInput.value = '';
        updateTaskList();
    }
});

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

updateDateTime();
updateTaskList();

setInterval(updateDateTime, 60000);
