import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';
import { TodoService } from 'src/app/_services/todo.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-your-todos',
  templateUrl: './your-todos.component.html',
  styleUrls: ['./your-todos.component.css'],
})
export class YourTodosComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todos = [];

  ngOnInit() {
    console.log('inside You todosa: ');
    var x = localStorage.getItem('token');
    if (x) {
      var allx = JSON.parse(x);
    }

    this.todoService.showTodoByUser(allx.username).subscribe((response) => {
      // console.log('String: ' + JSON.stringify(response));
      // console.log('Raw: ' + response);
      this.todos = Object.assign(response);
    });
  }

  strikeTodo(todo) {

    console.log("event: " + JSON.stringify(todo))
    

    this.todoService.updateTodo(todo).subscribe(
      (response) => {
        console.log('The response' + JSON.stringify(response));
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }
}


//(change)="markAsDone($event.checked)"

