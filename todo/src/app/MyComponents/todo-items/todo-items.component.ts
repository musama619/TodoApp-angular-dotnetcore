import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/_models/Todo';
import { TodoService } from 'src/app/_services/todo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  constructor(private todoService: TodoService, private toastr: ToastrService, private router: Router) { }


  @Input() todo: any;
  @Input() i: number;

  @Output() todoCheckbox: EventEmitter<{todoid, Todo}> = new EventEmitter();

  val: any;
  conv: any;

  ngOnInit() {
    
    console.log("Hi" + this.todo)
  }

  deleteTodo(todo){

    Swal.fire({
      title: 'Delete Todo: "' + todo.title + '"',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todoService.deleteTodo(todo.id).subscribe(response => {
          this.toastr.success("Successful")
          Swal.fire('Deleted!', 'Todo "' + todo.title + '" has been deleted.', 'success');

          this.router.navigate(['/your-todos']);

      }, error => {
        Swal.fire('Error!', 'Todo "' + todo.title + '" cannot be deleted.', 'error');

        this.router.navigate(['/your-todos']);

      });


       
      }
    });

  }


  markAsDone(todo, event){

    var todoid = todo.id
    todo.status = event;



    console.log("TodoId: "+ todoid)
    console.log("New: "+ JSON.stringify(todo))
    
    console.log("Event: "+ event)
    this.todoCheckbox.emit({todoid: todoid, Todo: todo});
   
  }

}
