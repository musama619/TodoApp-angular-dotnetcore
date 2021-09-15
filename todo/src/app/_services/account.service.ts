import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
    
  }

  getToken(){

    var token = localStorage.getItem('token');

    
    if (token != null) {
      var token_n = JSON.parse(token);
      return token_n.token
    }
    else{
      console.log("Empty token")
    }
    

  }
}
