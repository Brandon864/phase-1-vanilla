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
    taskList.appendChild(newTaskListItem);
  }
});
