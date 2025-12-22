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

            const label = val.querySelector('label')
            // console.log('clear all ',label.textContent)
            const updatedTaskArr = taskArr.filter(val=>val.content != label.textContent)
            saveTaskStorage(updatedTaskArr)
            taskArr = updatedTaskArr

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







// THEORY
// we can't share cookies among browsers
// here the information is stored only for single user

// Cookies
// can store only certain amt of information
// local storage and session storage can store up to 10mb and 5mb data
// cookies are supported in old browsers, but localstorage and session storage are supported in old browsers
// cookies and local storage ke data can be accessed across multiple tabs, while session storage is only available on the tab you set session in

// session storage duration
// session storage is available as long as tab is open, when tab closed session closed

// localstorage me data is stored forever, unless user sets to delete it
// localstorage ka data is stored in browser itself, same as session Storage
// but in cookies, data is stored in server as well, isiliye cookies ka storage is small

// unless u want to send the data to server, make use of session or localstorage

// localStorage.getItem
// helps you retrieve item in loalStorage
// localStorage.setItem
// setItem me you need a key and value
// localStorage.removeItem
// - this removes the item

// unlike sessionstorage the data will persist in browser,
// session storage me once you close tab, its gone

// sessionStorage also has same methods as localStorage
// sessionStorage.getItem
// sessionStorage.setItem
// sessionStorage.removeItem

// If you want to update existing data, then tuze .setItem method se set karna hoga

// Cookies
// document.cookie = 'name=kyle'
// here cookie section me 'name' key with value 'kyle' is gonna get saved
// also with the cookie, we can include more attributes like expiration time and all
// like this document.cookie = 'name=kyle; expiration='+ new Date(2020,1,1).toUTCString()

// to add another cookie
// document.cookie = "name=S; expiration="+ new Date(9999,1,1).toUTCString()

// to access the cookies, document.cookie
// use library to access the cookies 