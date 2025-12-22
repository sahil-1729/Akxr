const taskList = document.querySelector('.task-list')
var taskArr

// total task counter 
let totalTask = document.querySelector('.total-task-counter')
// totalTask.textContent = 0

// completed task counter 
let completedTask = document.querySelector('.completed-task-counter')
// completedTask.textContent = 0


function loadTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    return tasks
}

function saveTaskStorage(taskArr) {
    console.log('while adding ', taskArr)
    const temp = JSON.stringify(taskArr)
    localStorage.setItem('tasks', temp)
}
function deleteTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

}

taskArr = loadTask()
totalTask.textContent = taskArr.length

let initialCompleteTask = 0

// initially load the task
taskArr.forEach(val => {
    const newTask = document.createElement('div')
    newTask.setAttribute('class', 'task')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('class', 'task-checkbox')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = val.completed

    const taskName = document.createElement('label')
    taskName.textContent = val.content
    if (val.completed) {
        initialCompleteTask = initialCompleteTask + 1

        taskName.style.textDecoration = 'line-through'
    }

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'task-delete-button')
    deleteButton.textContent = 'delete'

    newTask.appendChild(checkbox)
    newTask.appendChild(taskName)
    newTask.appendChild(deleteButton)

    taskList.appendChild(newTask)
})
console.log(taskArr)

completedTask.textContent = initialCompleteTask


const btn = document.querySelector('.create-task-button')

var updatedValue = ""

const addTask = document.querySelector('.input-task')
addTask.addEventListener('input', function (e) {
    updatedValue = e.target.value
})


function includeTask(e) {
    e.preventDefault()

    if (updatedValue === "") {
        return
    }
    const typedValue = updatedValue
    console.log('the task to be created ', typedValue)

    const newTask = document.createElement('div')
    newTask.setAttribute('class', 'task')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('class', 'task-checkbox')
    checkbox.setAttribute('type', 'checkbox')

    const taskName = document.createElement('label')
    taskName.textContent = typedValue

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'task-delete-button')
    deleteButton.textContent = 'delete'

    newTask.appendChild(checkbox)
    newTask.appendChild(taskName)
    newTask.appendChild(deleteButton)

    taskList.appendChild(newTask)

    addTask.value = ""

    console.log('before adding ', taskArr)
    const data = {
        content: updatedValue,
        completed: false
    }
    taskArr.push(data)
    // console.log(taskArr)
    saveTaskStorage(taskArr)

    updatedValue = ""

    const totalTask = document.querySelector('.total-task-counter')
    const cntTotalTask = Number(totalTask.textContent)
    totalTask.textContent = cntTotalTask + 1


}

// add task 
btn.addEventListener("click", includeTask)

// delete task and mark completed 
taskList.addEventListener('click', function (e) {
    if (e.target.className === 'task-delete-button') {
        const li = e.target.parentNode
        li.parentNode.removeChild(li)

        // delete task in storage 
        const taskContent = e.target.previousSibling.textContent

        // check if the task is completed and is to be deleted then update the total task and completed task 
        const checkbox = e.target.previousSibling.previousSibling.checked
        if (checkbox) {
            completedTask.textContent = Number(completedTask.textContent) - 1
        }

        // remove the task to be deleted from the array and save 
        const updatedTaskArr = taskArr.filter(val => val.content != taskContent)
        saveTaskStorage(updatedTaskArr)
        taskArr = updatedTaskArr
        console.log(taskArr)


        const totalTask = document.querySelector('.total-task-counter')
        const cntTotalTask = Number(totalTask.textContent)
        totalTask.textContent = cntTotalTask - 1

    } else if (e.target.className === "task-checkbox") {
        const task = e.target.nextSibling

        if (e.target.checked) {
            task.setAttribute('class', 'completed-task')
            task.style.textDecoration = 'line-through'

            console.log(task.textContent)
            const val = taskArr.map(val => {
                if (val.content === task.textContent) {
                    val.completed = !(val.completed)
                    return val
                }
                return val;
            })
            taskArr = val
            // console.log(taskArr)
            saveTaskStorage(taskArr)

            const completedTask = document.querySelector('.completed-task-counter')
            const cntCompletedTask = Number(completedTask.textContent)
            completedTask.textContent = cntCompletedTask + 1

        } else {
            task.removeAttribute('class')
            task.style.textDecoration = ''

            const val = taskArr.map(val => {
                if (val.content === task.textContent) {
                    val.completed = !(val.completed)
                    return val
                }
                return val;
            })
            taskArr = val
            // console.log(taskArr)
            saveTaskStorage(taskArr)

            const completedTask = document.querySelector('.completed-task-counter')
            const cntCompletedTask = Number(completedTask.textContent)
            completedTask.textContent = cntCompletedTask - 1

        }
    }
})

function clearTasks(e) {
    let taskList = document.querySelectorAll('.task')
    taskList = Array.from(taskList)

    taskList.forEach(function (val) {

        const label = val.querySelector('label')
        if ((label.style.textDecoration != "")) {
            val.parentElement.removeChild(val)

            const totalTask = document.querySelector('.total-task-counter')
            const cntTotalTask = Number(totalTask.textContent)
            totalTask.textContent = cntTotalTask - 1

            completedTask.textContent = 0
        }

    })
}
// clear all task 
var clearAllButton = document.querySelector('.clear-all-button')
clearAllButton.addEventListener('click', clearTasks)


