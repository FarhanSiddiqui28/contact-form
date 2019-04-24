import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name='';
  array=[];

  add(){
    this.array.push(this.name)
    console.log(this.name);
    console.log(this.array);
  }

}
