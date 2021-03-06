import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'https://localhost:5001/api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(this.baseUrl)
  }

  getCities(){
    return this.http.get(this.baseUrl + 'getCities')
  }

  getStates(){
    return this.http.get(this.baseUrl + 'getStates')
  }

  getQualifications(){
    return this.http.get(this.baseUrl + 'getQualifications')
  }

  getDepartments(){
    return this.http.get(this.baseUrl + 'getDepartments')
  }

  getDesignations(){
    return this.http.get(this.baseUrl + 'getDesignations')
  }

  addEmployee(employee: any){
    return this.http.post(this.baseUrl, employee)
  }

  deleteEmployee(employeeId: number){
    return this.http.delete(this.baseUrl + employeeId);
  }

  updateEmployee(employeeId: number, employeeData: any){
    return this.http.put(this.baseUrl + employeeId, employeeData)
  }
}
