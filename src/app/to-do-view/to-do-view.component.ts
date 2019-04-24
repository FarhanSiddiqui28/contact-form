import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.css']
})
export class ToDoViewComponent implements OnInit {
  arr = []
  constructor(private todoservice: TodoService) { }
  ngOnInit() {
    this.arr = this.todoservice.getData()
    console.log(this.arr)
  }

}
