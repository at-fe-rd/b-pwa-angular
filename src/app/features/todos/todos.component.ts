import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/shared/model/todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  action: String;
  counter: any;

  constructor() {}

  ngOnInit() {
    this.action = 'all';
    localStorage.getItem('todos') ? this.todos = JSON.parse(localStorage.getItem('todos')) : this.todos = [];
    this.countTodos();
  }

  // save todos to localStorage
  saveTodosToLocalStorage = todos => localStorage.setItem('todos', JSON.stringify(todos));

  // select completed of all todos
  onToggleAll() {
    this.todos.forEach(event => {
      event.isCompleted = true;
      this.saveTodosToLocalStorage(this.todos);
    });
  }

  onChange(action: string, todo: Todo = null) {
    // handle action
    switch (action) {
      case 'add':
        this.todos = [todo, ...this.todos];
        this.saveTodosToLocalStorage(this.todos);
        break
      case 'delete':
        // just for animation handling
        todo.isDeleting = true;
        setTimeout(() => {
          this.todos = this.todos.filter(item => item.id !== todo.id);
          this.saveTodosToLocalStorage(this.todos);
        }, 500);
        break
      case 'finish':
        // just for animation handling
        const completedItems = this.todos.filter((item: Todo) => {
          if (item.isCompleted) {
            item.isDeleting = true;
          }
          return !item.isCompleted;
        });
        setTimeout(() => {
          this.todos = completedItems
          this.saveTodosToLocalStorage(this.todos);
        }, 500);
        break
        default: this.saveTodosToLocalStorage(this.todos); 
        break;
    }
    this.countTodos();
  }

  // update counter when data changed
  countTodos() {
    this.counter = this.todos.reduce((obj, item: Todo) => {
      item.isCompleted ? obj.completed++ : obj.active++;
      return obj;
    }, { active: 0, completed: 0 });
  }
}
