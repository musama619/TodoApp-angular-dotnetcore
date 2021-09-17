import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/_models/Employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  @Output() toeditEmployee: EventEmitter<Employee> = new EventEmitter();

  dataSource: any;
  modelData: Employee;

  constructor(
    private empService: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService
  ) {
    this.getData();
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'department',
    'designation',
    'action',
  ];
  hide = true;
  users: any;
  sendModal: Employee;

  ngOnInit() {}

  getData() {
    this.empService.getEmployees().subscribe((response) => {
      this.dataSource = response;
      this.modelData = Object.assign(response);
    });
  }
  editEmployee(model: any) {
    this.sendModal = model;
    console.log('inside' + JSON.stringify(model));

    this.toeditEmployee.emit(model);

    this.userService.passEditeEmployeeData(model);

    this.router.navigate(['/employee-setup']);

    //$('#exampleModal').modal('show');
  }

  deleteEmployee(model: Employee) {
    Swal.fire({
      title: 'Delete Employee: "' + model.employeeName + '"',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('confirmed');
        this.empService.deleteEmployee(model.id).subscribe(
          (response) => {
            this.toastr.success('Successful');
            Swal.fire(
              'Deleted!',
              '"' + model.employeeName + '" has been deleted.',
              'success'
            );
            this.getData();
          },
          (error) => {
            Swal.fire(
              'Error!',
              '"' + model.employeeName + '" cannot be deleted.',
              'error'
            );
            this.getData();
          }
        );
      }
    });
  }
}
