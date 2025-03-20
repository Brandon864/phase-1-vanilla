// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('Page Loaded');
  const taskInput = document.getElementById('taskInput');
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function () {
    console.log('Button clicked. Task: ', taskInput.value);

    createListitem(taskInput.value, false); // new tasks added and set as incomplete
    taskInput.value = ''; // clears input field after adding a task
  });

  // initial sample tasks:
  const sampleTasks = [
    { text: 'Buy groceries', completed: false },
    { text: 'Finish project report', completed: true },
    { text: 'call the doctor', completed: true },
  ];

  sampleTasks.forEach((task) => createListitem(task.text, task.completed));

  function createListitem(taskTextValue, isCompleted) {
    if (!taskTextValue.trim()) {
      // ignore any empty input
      return;
    }

    const newTaskListItem = document.createElement('li');
    newTaskListItem.classList.add('task'); // newTaskListItem.classList = 'task'
    const taskText = document.createElement('span');
    taskText.textContent = taskTextValue;
    newTaskListItem.appendChild(taskText);
    // newTaskListItem.textContent = taskTextValue;
    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTaskListItem);

    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    checkbox.classList.add('task-checkbox');

    if (isCompleted) {
      newTaskListItem.style.textDecoration = 'line-through';
    }

    // toggle completion state when checkbox is clicked
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        newTaskListItem.style.textDecoration = 'line-through';
      } else {
        newTaskListItem.style.textDecoration = 'none';
      }
    });

    // append checkbox to the task item
    newTaskListItem.prepend(checkbox);

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
    // append the editBtn to our task list item
    newTaskListItem.appendChild(editBtn);

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
  }
});
