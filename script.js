document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    // Add new task
    addButton.addEventListener('click', () => {
      const taskText = inputField.value.trim();
      if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
  
        // Mark as done
        listItem.addEventListener('click', () => {
          listItem.classList.toggle('done');
        });
  
        // Delete task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
          listItem.remove();
        });
  
        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);
        inputField.value = '';
      }
    });
  
    // Add task with Enter key
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addButton.click();
      }
    });
  });
  