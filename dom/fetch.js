document.addEventListener('DOMContentLoaded', () => {
  // all logic related to fetching data from the server will go here
  // 1. get data from http://localhost:5000/tasks
  // 2. post data to http://localhost:5000/tasks
  // 3. patch data to http://localhost:5000/tasks
  // 4. put data to http://localhost:5000/tasks
  // 4. delete data from http://localhost:5000/tasks
  // fetch() method --> is used to make requests to a server and get, send, delete data
  // get new tasks, add tasks, update tasks, delete tasks

  const apiUrl = 'http://localhost:5000/tasks';

  const taskList = document.getElementById('taskList');
  console.log(taskList);

  // 1. GET request --> getting all tasks
  fetch(apiUrl) // fetch --> sending a GET request to the server
    .then((response) => {
      console.log(response);
      return response.json(); // parsing the response to json
    }) // first then --> parses our response to json
    .then((data) => {
      // second then --> action on the data
      // call function for rendering tasks on the page
      console.log(data);
      data.forEach((task) => renderTask(task));
    })
    .catch((error) => {
      // catch --> if there is an error
      console.error('Error:', error);
    });

  function renderTask(task) {
    // task will be an object
    const newTaskListItem = document.createElement('li');
    newTaskListItem.classList.add('task');
    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.text;
    newTaskListItem.appendChild(taskText);

    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('task-checkbox');
    if (task.completed) {
      taskText.style.textDecoration = 'line-through';
    }

    // toggle completion state when checkbox is clicked
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
      } else {
        taskText.style.textDecoration = 'none';
      }
    });

    // add an edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    // attach an editing event listener to the editBtn when clicked
    editBtn.addEventListener('click', () => {
      const newText = prompt('Edit your task:', taskText.textContent);
      if (newText !== null) {
        taskText.textContent = newText.trim() || taskText.textContent;
      }
    });

    // add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // add event for deleting to the deleteBtn
    deleteBtn.addEventListener('click', () => {
      console.log('I was clicked to for delete purposes');
      newTaskListItem.remove();
      console.log('a task was removed');
    });

    // append the deleteBtn to the end of the newTaskListItem
    newTaskListItem.appendChild(deleteBtn);
    // append the editBtn to our task list item
    newTaskListItem.appendChild(editBtn);
    // append checkbox to the task item
    newTaskListItem.prepend(checkbox);
    //append new task to the task list
  }
});
