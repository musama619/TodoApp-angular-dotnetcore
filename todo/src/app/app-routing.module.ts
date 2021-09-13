import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './MyComponents/employee-details/employee-details.component';
import { EmployeeSetupComponent } from './MyComponents/employee-setup/employee-setup.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { YourTodosComponent } from './MyComponents/your-todos/your-todos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'your-todos', component: YourTodosComponent},
  {path: 'employee-setup', component: EmployeeSetupComponent},
  {path: 'employee-details', component: EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
