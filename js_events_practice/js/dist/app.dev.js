"use strict";

//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //new-task

var addButton = document.getElementsByTagName("button")[0]; //first button

var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks

var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

var TASKS = [{
  text: "Pay bills",
  status: false
}, {
  text: "See the doctor",
  status: true
}]; //Add a new task

var addTask = function addTask() {
  console.log("Add task...");
  var text = taskInput.value.trim();

  if (text !== "") {
    TASKS.push({
      text: text,
      status: false
    });
    taskInput.value = '';
    incompleteTasksHolder.insertAdjacentHTML('afterbegin', "<li>\n    <input type=\"checkbox\">\n    <label>".concat(text, "</label>\n    <input type=\"text\" value=\"").concat(text, "\">\n    <button class=\"edit\">Edit</button><button class=\"delete\">Delete</button>\n    </li>"));
    panel.success("Task added", true);
  } else {
    panel.warning("Enter task", true);
  }
}; //Edit an existing task


var editTask = function editTask(li) {
  console.log("Edit task...");
  var label = li.children[1];
  var input = li.children[2];

  if (li.classList.contains('editMode')) {
    label.innerText = input.value;
    li.classList.remove('editMode');
  } else {
    input.value = label.innerText;
    li.classList.add('editMode');
  } //When the Edit button is pressed
  //if the class of the parent is .editMode
  //Switch from .editMode
  //label text become the input's value
  //else
  //Switch to .editMode
  //input value becomes the label's text
  //Toggle .editMode on the parent

}; //Delete an existing task


var deleteTask = function deleteTask(li) {
  console.log("Delete task...");

  if (confirm("Really delete task?")) {
    li.remove();
  } //When the Delete button is pressed
  //Remove the parent list item from the ul

}; //Mark a task as complete


var taskCompleted = function taskCompleted(li) {
  console.log("Task complete...");
  var label = li.children[1];
  completedTasksHolder.insertAdjacentHTML('beforeend', "\n  <li>\n  <input type=\"checkbox\" checked>\n  <label>".concat(label.innerText, "</label>\n  <input type=\"text\">\n  <button class=\"edit\">Edit</button>\n  <button class=\"delete\">Delete</button></li>\n  "));
  li.remove(); //When the checkbox is checked
  //Append the task list item to the #completed-tasks
}; //Mark a task as incomplete


var taskIncomplete = function taskIncomplete(li) {
  console.log("Task incomplete...");
  var label = li.children[1];
  incompleteTasksHolder.insertAdjacentHTML('afterbegin', "\n  <li>\n  <input type=\"checkbox\">\n  <label>".concat(label.innerText, "</label>\n  <input type=\"text\">\n  <button class=\"edit\">Edit</button>\n  <button class=\"delete\">Delete</button></li>\n  "));
  li.remove(); //When the checkbox is unchecked
  //Append the task list item to the #incomplete-tasks
}; //Set the click handler to the addTask function
// addButton.onclick = addTask;


addButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});
document.body.addEventListener('keyup', function (e) {
  if (e.ctrlKey && e.code == "KeyA" || e.ctrlKey && e.code == "KeyU" || e.ctrlKey && e.code == "KeyC") {
    e.preventDefault();
    return false;
  }
});
incompleteTasksHolder.addEventListener('click', function (e) {
  console.log(e);

  if (e.target.className == "edit") {
    editTask(e.target.parentElement);
  }

  if (e.target.className == "delete") {
    deleteTask(e.target.parentElement);
  }

  if (e.target.tagName == 'INPUT' && e.target.type == 'checkbox') {
    taskCompleted(e.target.parentElement);
  }
});
completedTasksHolder.addEventListener('click', function (e) {
  console.log(e);

  if (e.target.className == "edit") {
    editTask(e.target.parentElement);
  }

  if (e.target.className == "delete") {
    deleteTask(e.target.parentElement);
  }

  if (e.target.tagName == 'INPUT' && e.target.type == 'checkbox') {
    taskIncomplete(e.target.parentElement);
  }
});