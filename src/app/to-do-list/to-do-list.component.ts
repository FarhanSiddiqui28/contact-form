import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  name = ''
  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    console.log('Todo list component')

  }

  add() {
    this.todoservice.setDate(this.name)
  }

}
