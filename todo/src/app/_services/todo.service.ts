import { HttpClient } from '@angular/common/http';
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
    console.log("Username received: " + model)
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
