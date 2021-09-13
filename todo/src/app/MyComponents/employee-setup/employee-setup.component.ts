import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employee-setup',
  templateUrl: './employee-setup.component.html',
  styleUrls: ['./employee-setup.component.css']
})
export class EmployeeSetupComponent implements OnInit {

  employeeForm: FormGroup;
  cities: any;
  states: any;
  qualifications: any;
  departments: any;
  designations: any;

  constructor(private empService: EmployeeService, private toastr: ToastrService) {

    this.setCities();
    this.setStates();
    this.setQualifications();
    this.setDepartments();
    this.setDesignations();

   }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      employeeName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      departmentCode: new FormControl(this.departments),
      designationCode: new FormControl(this.designations), 
      address: new FormControl(null, Validators.required),
      doj: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      qualificationCode: new FormControl(this.qualifications),
      stateCode: new FormControl(this.states),
      cityCode: new FormControl(this.cities),
      phoneNumber: new FormControl(null, Validators.required) ,
      genderCode: new FormControl(null, Validators.required),
      typeCode: new FormControl(null),
      
    })
  }


  submit(){
    let val = JSON.stringify(this.employeeForm.value)
    console.log("Setup: " + val)

    this.empService.addEmployee(this.employeeForm.value).subscribe(response => {
      if (response) {
        this.toastr.success('Login Successful');
      }
    }, error => {
      console.log(error)
    })

  }

  setCities(){
    this.empService.getCities().subscribe(response => {    
      this.cities = response
    }, error => {
      console.log(error)
    })
  }

  setStates(){
    this.empService.getStates().subscribe(response => {    
      this.states = response
    }, error => {
      console.log(error)
    })
  }

  setQualifications(){
    this.empService.getQualifications().subscribe(response => {    
      this.qualifications = response
    }, error => {
      console.log(error)
    })
  }

  setDepartments(){
    this.empService.getDepartments().subscribe(response => {    
      this.departments = response
    }, error => {
      console.log(error)
    })
  }

  setDesignations(){
    this.empService.getDesignations().subscribe(response => {    
      this.designations = response
    }, error => {
      console.log(error)
    })
  }

}
