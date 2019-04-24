import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  name = ''
  todoArray = []
  constructor() { }

  getData() {
    console.log('get Data')
    return this.todoArray
  }

  setDate(value) {
    this.todoArray.push(value)
    console.log("Todo Service",this.todoArray)
  }


}
