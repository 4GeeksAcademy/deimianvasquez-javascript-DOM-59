let taskForm = document.getElementById("task-form")
let taskList = document.getElementById("task-list")
// function getOS() {
//   const userAgent = window.navigator.userAgent;
//   let os = "Desconocido";

//   if (userAgent.indexOf("Win") !== -1) {
//     os = "Windows";
//   } else if (userAgent.indexOf("Mac") !== -1) {
//     os = "macOS";
//   } else if (userAgent.indexOf("X11") !== -1) {
//     os = "UNIX";
//   } else if (userAgent.indexOf("Linux") !== -1) {
//     os = "Linux";
//   } else if (userAgent.indexOf("Android") !== -1) {
//     os = "Android";
//   } else if (userAgent.indexOf("like Mac") !== -1) {
//     os = "iOS";
//   }

//   return os;
// }

// console.log("El sistema operativo es: " + getOS());


// if (getOS == "UNIX"){
    
//     taskList.style.color="red"
// }


// 
function createTaskElement(task) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = "❌"
    span.className = "delete-btn"
    li.textContent = task
    li.appendChild(span)

    return li

}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const taskInput = document.getElementById("task-input")
    // console.log(taskInput.value)

    let taskListChild = taskList.children
    console.log(taskListChild)

    if (taskInput.value) {
        // taskList.append(createTaskElement(taskInput.value))
        taskList.insertBefore(createTaskElement(taskInput.value), taskListChild[0])
        taskInput.value = ""
    }
})



function deleteTask(taskItem) {
    const taskInput = document.getElementById("task-input")
    taskInput.value = taskItem.textContent.trim()
    taskItem.remove()
    console.log(taskItem.textContent = "hola")
}


taskList.addEventListener("click", (event) => {
    deleteTask(event.target.parentElement)
})

const userAgent = window.navigator.userAgent
console.log(userAgent)


