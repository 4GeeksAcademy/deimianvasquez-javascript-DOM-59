function createTaskElement(task) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = "❌"
    span.className = "delete-btn"
    li.textContent = task
    li.appendChild(span)
    return li
}

function deleteTask(taskItem) {
    taskItem.remove()
}

function initApp() {
    let taskForm = document.getElementById("task-form")
    let taskList = document.getElementById("task-list")
    window.deleteTask = deleteTask

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const taskInput = document.getElementById("task-input")
        let taskListChild = taskList.children
        if (taskInput.value) {
            taskList.insertBefore(createTaskElement(taskInput.value), taskListChild[0])
            taskInput.value = ""
        }
    })

    taskList.addEventListener("click", (event) => {
        deleteTask(event.target.parentElement)
    })

    const userAgent = window.navigator.userAgent
    console.log(userAgent)
}

// Solo ejecuta la inicialización si el DOM está listo
if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", initApp)
}

// Exporta funciones para los tests
module.exports = { createTaskElement, deleteTask }