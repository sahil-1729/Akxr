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

})

// delete task 
taskList.addEventListener('click', function (e) {
    if (e.target.className == 'task-delete-button') {
        const li = e.target.parentNode
        li.parentNode.removeChild(li)
    }
})

var clearAllButton = document.querySelector('.clear-all-button')

clearAllButton.addEventListener('click', function (e) {
    let taskList = document.querySelectorAll('.task')
    taskList = Array.from(taskList)

    taskList.forEach(function (val) {
        val.parentElement.removeChild(val)
    })
})