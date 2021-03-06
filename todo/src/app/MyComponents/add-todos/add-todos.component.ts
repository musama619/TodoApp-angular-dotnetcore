import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/_services/account.service';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  currDiv: string = 'D';
  title: string;
  minDate: Date;
  date: Date;  
  constructor(private todoService: TodoService) { }

  addTodoForm: FormGroup;

  ngOnInit(){
    this.addTodoForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      addedByUserName: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    })

    
  }

  onSubmit() {

    var x = localStorage.getItem('token');
    if (x) {
      var allx = JSON.parse(x);
    
    }

    console.log("Value: "+this.addTodoForm.value)

    this.addTodoForm.controls['addedByUserName'].setValue(allx.username);
    this.addTodoForm.controls['status'].setValue(true);

  //   this.addTodoForm.patchValue({
  //     status: 'true'
  //  });
    // this.addTodoForm.controls['status'].setValue('true');

    console.log("After Patch: "+ JSON.stringify(this.addTodoForm.value));

    this.todoService.addTodo(this.addTodoForm.value).subscribe(response => {    
      console.log("Todo Added: " + response);
      

    })
  }

  showDiv() {
    this.currDiv = 'A';
  }

  onCancel() {
    this.currDiv = 'D';

    this.title = '';
    this.date = new Date();
  }

  adjustDateForTimeOffset(dateToAdjust) {

    console.log("called")
    var offsetMs = dateToAdjust.getTimezoneOffset() * 60000;
    return new Date(dateToAdjust.getTime() - offsetMs);
  }
}
