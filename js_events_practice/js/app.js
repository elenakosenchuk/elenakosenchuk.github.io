//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

const taskInput = document.getElementById("new-task"); //new-task
const addButton = document.getElementsByTagName("button")[0]; //first button
const incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
const completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

let TASKS = [
  {
    text:"Pay bills",
    status:false
  },
  {
    text:"See the doctor",
    status: true
  }
];
//Add a new task
const addTask = function() {
  console.log("Add task...");
  let text = taskInput.value.trim();
  if(text !== ""){
    TASKS.push({
      text :text,
      status: false
    });
    taskInput.value = '';
    incompleteTasksHolder.insertAdjacentHTML('afterbegin',
    `<li>
    <input type="checkbox">
    <label>${text}</label>
    <input type="text" value="${text}">
    <button class="edit">Edit</button><button class="delete">Delete</button>
    </li>`);
    panel.success("Task added", true);
  }else{
    panel.warning("Enter task", true);
  }
}

//Edit an existing task
const editTask = function(li) {
  console.log("Edit task...");  
  let label = li.children[1];
  let input = li.children[2];  
  if(li.classList.contains('editMode')){
    label.innerText = input.value;
    li.classList.remove('editMode');
  }else{
    input.value = label.innerText;
    li.classList.add('editMode');
  }
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text
    
    //Toggle .editMode on the parent
}

//Delete an existing task
const deleteTask = function(li) {
  console.log("Delete task...");
  if(confirm("Really delete task?")){
    li.remove();
  }
  //When the Delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
const taskCompleted = function(li) {
  console.log("Task complete...");
  let label = li.children[1];
  completedTasksHolder.insertAdjacentHTML('beforeend', `
  <li>
  <input type="checkbox" checked>
  <label>${label.innerText}</label>
  <input type="text">
  <button class="edit">Edit</button>
  <button class="delete">Delete</button></li>
  `);
  li.remove();
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
const taskIncomplete = function(li) {
  console.log("Task incomplete...");
  let label = li.children[1];
  incompleteTasksHolder.insertAdjacentHTML('afterbegin', `
  <li>
  <input type="checkbox">
  <label>${label.innerText}</label>
  <input type="text">
  <button class="edit">Edit</button>
  <button class="delete">Delete</button></li>
  `);
  li.remove();
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
}

//Set the click handler to the addTask function
// addButton.onclick = addTask;

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keyup', function(e){  
  if(e.key=="Enter"){
    addTask();
  }
});

document.body.addEventListener('keyup', function (e){
  if((e.ctrlKey && e.code=="KeyA") || (e.ctrlKey && e.code=="KeyU") || (e.ctrlKey && e.code=="KeyC")){
    e.preventDefault();
    return false;
  }
});

incompleteTasksHolder.addEventListener('click', function(e){
  console.log(e);
  if(e.target.className=="edit"){
    editTask(e.target.parentElement);
  }
  if(e.target.className=="delete"){
    deleteTask(e.target.parentElement);
  }
  if(e.target.tagName=='INPUT' && e.target.type=='checkbox'){
    taskCompleted(e.target.parentElement);
  }  
});

completedTasksHolder.addEventListener('click', function(e){
  console.log(e);
  if(e.target.className=="edit"){
    editTask(e.target.parentElement);
  }
  if(e.target.className=="delete"){
    deleteTask(e.target.parentElement);
  }
  if(e.target.tagName=='INPUT' && e.target.type=='checkbox'){
    taskIncomplete(e.target.parentElement);
  }  
});


