import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.scss']
})
export class TodosFooterComponent implements OnInit {

  @Input() allTodos: Todo[];
  @Output() newAllTodos: EventEmitter<Todo[]> = new EventEmitter();
  abc: any;

  constructor() { }

  ngOnInit() {
    
  }

  handleComplete() {
    const copyTodos = JSON.stringify(this.allTodos);
    const newList = JSON.parse(copyTodos).filter(element => element.check);
    this.newAllTodos.emit(newList);
    console.log(this.allTodos);
  }

  handleActive() {
    const newList = this.allTodos.filter(element => !element.check);
    this.newAllTodos.emit(newList);
    console.log(this.allTodos);
  }

  handleAll(all) {
    const newList = this.allTodos
    this.newAllTodos.emit(newList);
    console.log(this.allTodos);
  }

}
