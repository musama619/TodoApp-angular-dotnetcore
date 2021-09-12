import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Todo } from '../_models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  showAllTodos() {
    return this.http.get<Todo[]>(this.baseUrl + 'todos');
  }

  showTodoByUser(model: any){

    var token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();

    if (token) {
      var token_n = JSON.parse(token);
    }

    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', token_n.token);
    
    console.log("Token: " + JSON.stringify(token_n.token))
    console.log("Header: " + JSON.stringify(headers))
    console.log(this.baseUrl + 'todos/ByUser/' + model)
    return this.http.get<Todo[]>(this.baseUrl + 'todos/ByUser/' + model)
  }

  addTodo(model: any) {
    return this.http.post(this.baseUrl + 'todos', model);
  }

  updateTodo(model: any){
    console.log(this.baseUrl + 'todos/' + model.todoid, model.Todo)
    return this.http.put(this.baseUrl + 'todos/' + model.todoid, model.Todo);
  }

  deleteTodo(model: number) {
    console.log("Inside delete: " + model)
    return this.http.delete(this.baseUrl + 'todos/' + model);
  }
}
