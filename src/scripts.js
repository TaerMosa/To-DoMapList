

function addTodoItem() {
  let todoInput = document.getElementById('name');
  let title = todoInput.value;

  if (!title) {
    return;
  }

  let newTodoItem = document.createElement("li");
  newTodoItem.className = 'location-item';

  let newTodoTitle = document.createTextNode(title);
  newTodoItem.appendChild(newTodoTitle);

  let todoList = document.getElementById('locations-list');
  todoList.appendChild(newTodoItem);






  todoInput.value = '';
}
/**
 * Created by ta2er on 2016-12-04.
 */
