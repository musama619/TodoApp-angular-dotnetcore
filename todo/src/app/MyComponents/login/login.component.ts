import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    this.accountService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log('login Success' + response);
        localStorage.setItem('token', JSON.stringify(response));

        // this.getUserInformation();

        this.router.navigate(['/your-todos']);
        this.toastr.success('Login Successful');
      },
      (error) => {
        console.log(error);
        this.toastr.error('Login Unsuccessful');
      }
    );
  }

  // getUserInformation() {
  //   var x = localStorage.getItem('token');
  //   if (x) {
  //     var allx = JSON.parse(x);
    
  //   }
  //   this.userService.getUserId(allx.username).subscribe(response =>{
  //     console.log(response);
      
  //   }, error => {console.log("error" + error)})
  // }
}
