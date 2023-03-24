var addBtn = document.getElementById("add-task")
var taskInput = document.getElementById("task")
var taskList = document.getElementById("tasks")

addBtn.addEventListener("click",function (params) {
    var task = taskInput.value
   addTask(task)
   taskInput.value = ""
   
   
})

function addTask(task) {
    var li = document.createElement("li")
    li.innerHTML = task
    taskList.appendChild(li)
}