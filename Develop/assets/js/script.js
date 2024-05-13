

// Retrieve tasks and nextId from localStorage

// let nextId = JSON.parse(localStorage.getItem("nextId"));
const addbtn = document.getElementById('add')
const taskname = document.getElementById('taskname')
const info = document.getElementById('info')
const duedates = document.getElementById('datepicker')
const submitbtn = document.getElementById('submitbtn')



const tasks = []
const taskid = []


class Task {
    constructor(id,title,notes,duedate) {
        this.id = localStorage.getItem('ID')
        this.title = taskname.value,
        this.notes = info.value,
        this.duedate = duedates.value
    }  
   
}
    

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let taskid = Math.floor(Math.random()*100)
    localStorage.setItem('ID',taskid)
}


// Todo: create a function to create a task card
async function createTaskCard() {
    await generateTaskId() 
    tasks.push(new Task())
    localStorage.setItem('tasks',JSON.stringify(tasks)) 
    renderTaskList()
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   const tasklist = JSON.parse(localStorage.getItem('tasks'));
   for (i = 0;i<tasklist.length;i++) {
    console.log(tasklist[i])

    let card = document.createElement('div')
    card.innerHTML = `
    <div id='${tasklist[i].id}' class="card" draggable="true" ondragstart='onDragStart(event)'>
        <div> TaskID: ${tasklist[i].id}</div>
        <div> Due Date: ${tasklist[i].duedate}</div>
        <div> Task Notes: ${tasklist[i].notes}</div>
    </div>
    `
    todo.appendChild(card)
   }



}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    console.log('hey')
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
console.log(cards)
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
 localStorage.getItem('tasks')
});

addbtn.addEventListener('click', event => {
})
submitbtn.addEventListener('click',event => {
    if (!taskname.value || !info.value || !duedates.value){
        alert('fill out entire form')
    }
    else{
        todo.innerHTML = ''
    createTaskCard()
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
}) 


// DRAGABBLE ELEMENT
const cards = () => document.getElementById('card')
//DROPABBLE AREA
const inprogress = document.getElementById('in-progress-cards')
const todo = document.getElementById('todo-cards')
const done = document.getElementById('done-cards')

function onDragStart(event) {
    event.dataTransfer.setData('text', event.target.id)
}

function onDragOver(event) {
    event.preventDefault()
}

function onDrop(event) {
    const id =event.dataTransfer.getData('text')
    const draggableElement = document.getElementById(id)
    const dropzone = event.target
    dropzone.appendChild(draggableElement)
    event.dataTransfer.clearData()
}