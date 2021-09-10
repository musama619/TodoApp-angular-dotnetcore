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
    console.log("inside register")
    console.log(model)
    return this.http.post(this.baseUrl + 'account/register', model);
  }

  login(model: any) {
    console.log("inside login")
    console.log(model)
    return this.http.post(this.baseUrl + 'account/login', model);
    
  }
}
