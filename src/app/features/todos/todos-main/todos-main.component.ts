import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.scss']
})
export class TodosMainComponent implements OnInit {

  @Input() allTodos: Todo[];
  constructor() { }

  ngOnInit() {
    console.log(this.allTodos);
  }

  // checkTodo(todo){
  //   todo.check = true;
  //   console.log(this.allTodos);
    
  // }
  checkTodo(todo: Todo){
    const allList = this.allTodos.map(x=> {
    if(x.id === todo.id) 
    x.check = true;
    return x;
    });
    this.allTodos = allList;
    console.log(this.allTodos);
    }
    
}
