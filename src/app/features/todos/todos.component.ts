import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  allTodos: Todo[];
  constructor() {
   }

  ngOnInit() {
    this.getDefaultTodo()
    console.log(this.allTodos);
    
  }

  getDefaultTodo(){
    this.allTodos = [new Todo('Use Redux')]
  }

  addNewTodo(todo: Todo){
    this.allTodos.unshift(todo);
  }

  modifyTodo(newAllTodos: Todo[]){
    this.allTodos = newAllTodos;
  }

}
