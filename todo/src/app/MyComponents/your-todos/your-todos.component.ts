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
  courses$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  todos = [];

  ngOnInit() {
    this.todoService.showAllTodos().subscribe(
      response => {
        console.log("Raw: " + response);
        this.todos = response;
      }
    )

    // this.todoService
    //   .showAllTodos()
    //   .toPromise()
    //   .then((data) => {
    //     console.log('new' + data);
    //     for (let key in data) {
    //       if (data.hasOwnProperty(key)) {
    //         this.todos.push(data[key]);
    //       }
    //     }

    //     console.log('Array: ' + this.todos);
    //   });
  }
}
