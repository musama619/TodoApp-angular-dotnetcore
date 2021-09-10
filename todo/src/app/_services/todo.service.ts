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

  // showAllTodos(){
  //   return this.http.get(this.baseUrl + 'todos').pipe(
  //     map((user: any) => {
  //       if (user) {
  //         console.log('Showing user: ' + JSON.stringify(user));
  //       }

  //       return user;
  //     })
  //   );

  //}

  showAllTodos(){
    return this.http.get<Todo[]>(this.baseUrl + 'todos');

  }


 

  addTodo(model: any){
    return this.http.post(this.baseUrl + 'todos', model);
  }
}
