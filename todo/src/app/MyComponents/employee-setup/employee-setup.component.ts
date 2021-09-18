import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/_models/Employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-employee-setup',
  templateUrl: './employee-setup.component.html',
  styleUrls: ['./employee-setup.component.css'],
})
export class EmployeeSetupComponent implements OnInit {
  employeeForm: FormGroup;
  cities: any;
  states: any;
  qualifications: any;
  departments: any;
  designations: any;

  setValue = 5;
  data: any;

  genderValue: any;
  typeValue: any;
  deptValue: any;

  constructor(
    private empService: EmployeeService,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.setCities();
    this.setStates();
    this.setQualifications();
    this.setDepartments();
    this.setDesignations();

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
      phoneNumber: new FormControl(null, Validators.required),
      genderCode: new FormControl(null, Validators.required),
      typeCode: new FormControl(null),
    });
  }

  ngOnInit() {

    this.data = this.userService.getEditEmployee();
    console.log(this.data)
    if (this.data) {
      this.setFormValues(this.data);
    }

  }

  setFormValues(data: any){
    this.employeeForm.setValue({
      employeeName: data.employeeName,
      email: data.email,
      departmentCode: data.departmentName,
      designationCode: data.designationName,
      address: data.address,
      doj: data.doj,
      dob:data.dob,
      qualificationCode: data.qualificationName,
      stateCode: data.stateName,
      cityCode: data.cityName,
      phoneNumber: data.phoneNumber,
      genderCode: data.genderName,
      typeCode: data.typeName,
    })

    if (data.genderName == 'Male') {
      this.genderValue = "1";
    }
    else{
      this.genderValue = "2";
    }

    if (data.typeName == 'Permenant') {
      this.typeValue = "1";
    }
    else{
      this.typeValue = "2";
    }

    this.deptValue = data.departmentName;
    
  }

  submit() {
    let val = JSON.stringify(this.employeeForm.value);
    console.log('Setup: ' + val);

    this.empService.addEmployee(this.employeeForm.value).subscribe(
      (response) => {
        if (response) {
          this.toastr.success('Employee Added Successfully');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setCities() {
    this.empService.getCities().subscribe(
      (response) => {
        this.cities = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setStates() {
    this.empService.getStates().subscribe(
      (response) => {
        this.states = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setQualifications() {
    this.empService.getQualifications().subscribe(
      (response) => {
        this.qualifications = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setDepartments() {
    this.empService.getDepartments().subscribe(
      (response) => {
        this.departments = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setDesignations() {
    this.empService.getDesignations().subscribe(
      (response) => {
        this.designations = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
