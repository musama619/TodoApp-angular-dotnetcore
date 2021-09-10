import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  baseUrl: string = 'https://localhost:5001/api/';
  registrationForm: FormGroup;

  constructor(private accountService: AccountService) { }


  ngOnInit(){
    this.registrationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.min(4)]),
      userName: new FormControl(null, Validators.required)
    })
  }

  submit(){
    let values = JSON.stringify(this.registrationForm.value)
    console.log("in submit click")
    this.accountService.register(this.registrationForm.value).subscribe(
      (response) => {
        console.log("register Success" + response)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
