import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIds = {
  TodoList: '.todo-list',
}

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {

  const displayTodos = () =>{

    const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
    renderTodos( elementIds.TodoList, todos );
  }

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
};