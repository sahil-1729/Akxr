
const totalTask = document.querySelector('.total-task-counter')
totalTask.textContent = 0

const completedTask = document.querySelector('.completed-task-counter')
completedTask.textContent = 0


const btn = document.querySelector('.create-task-button')

const taskList = document.querySelector('.task-list')

var updatedValue = ""

const addTask = document.querySelector('.input-task')
addTask.addEventListener('input', function (e) {
    updatedValue = e.target.value
})

// add task 
btn.addEventListener("click", function (e) {
    e.preventDefault()

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

    const totalTask = document.querySelector('.total-task-counter')
    const cntTotalTask = Number(totalTask.textContent)
    totalTask.textContent = cntTotalTask + 1
})

// delete task and mark completed 
taskList.addEventListener('click', function (e) {
    if (e.target.className === 'task-delete-button') {
        const li = e.target.parentNode
        li.parentNode.removeChild(li)

        const totalTask = document.querySelector('.total-task-counter')
        const cntTotalTask = Number(totalTask.textContent)
        totalTask.textContent = cntTotalTask - 1
    } else if (e.target.className === "task-checkbox") {
        const task = e.target.nextSibling

        if (e.target.checked) {
            task.setAttribute('class', 'completed-task')
            task.style.textDecoration = 'line-through'

            const completedTask = document.querySelector('.completed-task-counter')
            const cntCompletedTask = Number(completedTask.textContent)
            completedTask.textContent = cntCompletedTask + 1

        } else {
            task.removeAttribute('class')
            task.style.textDecoration = ''

            const completedTask = document.querySelector('.completed-task-counter')
            const cntCompletedTask = Number(completedTask.textContent)
            completedTask.textContent = cntCompletedTask - 1

        }
    }
})

// clear all task 
var clearAllButton = document.querySelector('.clear-all-button')
clearAllButton.addEventListener('click', function (e) {
    let taskList = document.querySelectorAll('.task')
    taskList = Array.from(taskList)

    taskList.forEach(function (val) {

        const label = val.querySelector('label')
        if (!(label.style.textDecoration === "")) {
            val.parentElement.removeChild(val)

            const totalTask = document.querySelector('.total-task-counter')
            const cntTotalTask = Number(totalTask.textContent)
            totalTask.textContent = cntTotalTask - 1

            completedTask.textContent = 0
        }

    })
})

