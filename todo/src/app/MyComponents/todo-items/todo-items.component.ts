import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  constructor() { }


  @Input() todo: any;
  @Input() i: number;

  val: any;
  conv: any;

  ngOnInit() {
    
    console.log("Hi" + this.todo)
  }

}
