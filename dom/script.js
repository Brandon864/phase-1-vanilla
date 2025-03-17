// getElementById
// IDs are unique
// this will return our element
const taskInput = document.getElementById('taskInput');
console.log(taskInput);

// getElementByClassName
// class names are not unique to a single element as they are used to represent elements that might share similarities and actions
// it returns a collection[] of all HTML elements with the specified class name --> HTMLCollection
const tasks = document.getElementsByClassName('task');
console.log(tasks);

// 1. grab our button using getElementById and store it in a variable (make it reusable)
// 2. add an event listener to our button
// 3. add an element to the UI -- add a task
// 4. remove an element from the UI -- remove/delete a task
// 5. submit and render/display content that we type inside our input field on the UI
// 6. edit a task
// 7. style one of our elements without using the CSS file -- do it from the script.js file

const submitBtn = document.getElementById('submitBtn');
console.log(submitBtn);

// function name(params, params 2, params 3) {

// }

function clickAction() {
  alert('I was clicked');
}

// submitBtn.addEventListener('click', () => {
//   // what happens when we click on our button
//   console.log('I was clicked!');
//   console.log(1 + 1);
// });

// submitBtn.addEventListener('click', function () {
//   //   console.log('I was clicked 2');
//   alert('I was clicked');
// });

submitBtn.addEventListener('click', clickAction);
// const editBtn = document.getElementById('editBtn');
// editBtn.addEventListener('click', clickAction);

const taskList = document.getElementById('taskList');

const deleteBtn = document.getElementById('deleteBtn');
console.log(deleteBtn);
const allTasks = document.getElementsByClassName('all_tasks');
console.log(allTasks);

const h2 = document.getElementsByTagName('h2');
console.log(h2);

const taskListSelector = document.querySelector('#taskList');
console.log(taskListSelector);

const taskSelector = document.querySelector('.task');
console.log(taskSelector);
const taskSelectorAll = document.querySelectorAll('.task');
console.log(taskSelectorAll);

// add task 6 to the UI
// using innerHTML to insert `<li class="task">task 6</li>` to the UI
taskList.innerHTML += `<li class="task">task 6</li>`;
