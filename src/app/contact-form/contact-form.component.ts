import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
   
  constructor() { }

  ngOnInit() {
  }
  inputObj={name:'',email:'',mobile:'',address:''}
  todoArray = [];
  editValue = { index: 0, isEdit: false }
 
   add() {
     
     if (this.editValue.isEdit) {
       this.todoArray[this.editValue.index] = this.inputObj,
       this.editValue = { index: 0, isEdit: false }
     }
     else {
      this.todoArray.push(this.inputObj)
      
    }
    this.inputObj={name:'',email:'',mobile:'',address:''}
  }
   delete(todo) {
     console.log(todo)
     this.todoArray.splice(this.todoArray.indexOf(todo), 1)
   }
   edit(todo) {
     this.editValue.index = this.todoArray.indexOf(todo)
     this.editValue.isEdit = true
     this.inputObj = todo
   }
 }
