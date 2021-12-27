"use strict"



let toDoList = document.forms.toDoList;
toDoList.elements.taskName.addEventListener('input', function(){

 if (taskName.validity.tooShort){
 	this.nextElementSibling.innerText = 'Количество символов от 3 до 20'
 }else if(taskName.validity.tooLong){
 	this.nextElementSibling.innerText='Количество символов от 3 до 20'
 }else this.nextElementSibling.innerText= ' '
 
});

toDoList.elements.taskDescription.addEventListener('input', function(){

 if (taskDescription.validity.tooShort){
 	this.nextElementSibling.innerText = 'Минимум 5 символов'
 }else this.nextElementSibling.innerText= ' '
 
});



toDoList.elements.timeForTask.addEventListener('input', function(){
let today = new Date();
let inputDate = toDoList.elements.timeForTask.value;
let inputDateObj = new Date(inputDate);
	if(inputDateObj.getTime()<today.getTime()){
		timeForTask.nextElementSibling.innerText = 'Дата не должна быть в прошлом'
	}else timeForTask.nextElementSibling.innerText= " "
	 
})


let button = document.getElementById("getSomePeople")
button.addEventListener("click", function(){
let buttonDiv = document.getElementById("firstButton")
if(buttonDiv.children.length<6){
	let div= document.createElement('div');
	let newWorker = document.createElement('div');
	newWorker.innerHTML = `
	<input id="somePeople" type="text" name="somePeople" placeholder="Добавить участника">`
	let removePeople = document.createElement("button")
	removePeople.innerText = 'X';
	div.append(newWorker, removePeople);
	removePeople.addEventListener("click", function(){
		div.remove()
		//removePeople.remove(newWorker)
	})
buttonDiv.append(div)
}
})

toDoList = document.getElementsByName("toDoList")[0]
toDoList.addEventListener("submit", function(event){
	event.preventDefault();
	if(taskName.validity.valid && timeForTask.validity.valid){
		toDoList.nextElementSibling.innerText = "Задача успешно добавлена"
	}else toDoList.nextElementSibling.innerText = "Заполните поля со звездой"
	let somePeopls = [];
	let somePeople = document.getElementsByName("somePeople")
	for (let man of somePeople){
        somePeopls.push(man.value)

let tasks = [];
let storage = {
	title: taskName.value,
	description: taskDescription.value,
	date: timeForTask.value,
	members: somePeopls
};
tasks.push(storage);

 let systemInt=localStorage.setItem("tasks", JSON.stringify(tasks))

	}
	})

