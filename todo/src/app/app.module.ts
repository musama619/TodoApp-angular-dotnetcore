import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YourTodosComponent } from './MyComponents/your-todos/your-todos.component';
import { AddTodosComponent } from './MyComponents/add-todos/add-todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';
import { ToastrModule } from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    YourTodosComponent,
    AddTodosComponent,
    TodoItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule,
    ToastrModule.forRoot(),
    MatCheckboxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
