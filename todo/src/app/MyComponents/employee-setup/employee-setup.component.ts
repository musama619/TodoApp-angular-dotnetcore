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

  data: any;

  constructor(
    private empService: EmployeeService,
    private toastr: ToastrService,
    private userService: UserService
  ) 
  
  {
    
  }

  ngOnInit() {

    this.data = this.userService.getEditEmployee();

    console.log('Emit: ' + this.data);

    if (this.data) {
      console.log(this.data);
      this.employeeForm = this.getForm(this.data);

    } else {
      this.employeeForm = this.getForm();
    }

    // this.employeeForm = new FormGroup({
    //   employeeName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   departmentCode: new FormControl(this.departments),
    //   designationCode: new FormControl(this.designations),
    //   address: new FormControl(null, Validators.required),
    //   doj: new FormControl(null, Validators.required),
    //   dob: new FormControl(null, Validators.required),
    //   qualificationCode: new FormControl(this.qualifications),
    //   stateCode: new FormControl(this.states),
    //   cityCode: new FormControl(this.cities),
    //   phoneNumber: new FormControl(null, Validators.required),
    //   genderCode: new FormControl(null, Validators.required),
    //   typeCode: new FormControl(null),
    // });

    this.setCities();
    this.setStates();
    this.setQualifications();
    this.setDepartments();
    this.setDesignations();
  }

  getForm(data: any = null): FormGroup {

    data = data || {
      
      employeeName: null,
      email: null,
      departmentCode: null,
      designationCode: this.designations,
      address: null,
      doj: null,
      dob: null,
      qualificationCode: this.qualifications,
      stateCode: this.states,
      cityCode: this.cities,
      phoneNumber: null,
      genderCode: null,
      typeCode: null,
    };

    return new FormGroup({
      employeeName: new FormControl(data.employeeName, Validators.required),
      email: new FormControl(data.email, [
        Validators.required,
        Validators.email,
      ]),

      departmentCode: new FormControl(data.departmentName),
      designationCode: new FormControl(data.designationName),
      address: new FormControl(data.address, Validators.required),
      doj: new FormControl(data.doj, Validators.required),
      dob: new FormControl(data.dob, Validators.required),
      qualificationCode: new FormControl(data.qualificationName),
      stateCode: new FormControl(data.stateName),
      cityCode: new FormControl(data.cityName),
      phoneNumber: new FormControl(data.phoneNumber, Validators.required),
      genderCode: new FormControl(data.genderCode, Validators.required),
      typeCode: new FormControl(data.typeName),
    });

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
