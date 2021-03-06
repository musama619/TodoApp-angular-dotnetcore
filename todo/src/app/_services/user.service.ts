import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  savedData: any;
  getUserId(model: any){
    console.log("Inside user:")
    console.log(this.baseUrl + '/users/ByUser/' + model)
    return this.http.get(this.baseUrl + 'users/ByUser/' + model)
  }
  
  
  passEditeEmployeeData(model: any){
    this.savedData = model;

  }

  getEditEmployee(){
    return this.savedData;
  }
}
