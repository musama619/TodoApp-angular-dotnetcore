import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  loginForm: FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login(){
    this.accountService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("login Success" + response);
        localStorage.setItem('token', JSON.stringify(response));
        this.router.navigate(['/your-todos']);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
