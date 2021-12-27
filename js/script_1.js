"use strict"
let taskContainer = localStorage.getItem("tasks");
taskContainer = JSON.parse(taskContainer);
for(let item of taskContainer){
	let columnOfTasks = document.querySelector(".task_container");
	let oneTask = document.createElement("div");
	oneTask.innerHTML=`
<div id = "section" class = "container">
<h2>${item.title}</h2>
<p>Автор:${item.members}</p>
</div>
<div>
<p>${item.description}</p>
<p>Выполнить к: </p>
<p>${item.date}</p>
</div>`
columnOfTasks.append(oneTask)
oneTask.addEventListener("click", function(){
  if(!(this.classList.contains ( "task_selected"))){
    this.classList.add("task_selected");
  }else{
    this.classList.remove("task_selected");
}
})
let button = document.querySelector(".button_delete");
button.addEventListener("click", function(){
  let focus=document.querySelectorAll(".task_selected");
  for(let section of focus){
    let number=section.getElementById("section");;
    delete taskContainer[number];
  }
})
}