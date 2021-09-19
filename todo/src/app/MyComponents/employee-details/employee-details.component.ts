import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  dataSource = new MatTableDataSource<Employee>();
  modelData: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  @Output() toEmployeeData: EventEmitter<any> = new EventEmitter();



  constructor(
    private empService: EmployeeService,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService
  ) {
    
  }

  displayedColumns: string[] = [
    'id',
    'employeeName',
    'departmentName',
    'designationName',
    'action',
  ];
  hide = true;
  users: any;
  sendModal: Employee;

  ngOnInit() {
    this.getData();
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }
  getData() {
    this.empService.getEmployees().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.modelData = Object.assign(response);

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  editEmployee(model: any) {
    this.sendModal = model;
    console.log('inside' + JSON.stringify(model));

    this.userService.passEditeEmployeeData(model);

    this.router.navigate(['/employee-setup']);

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

  showModal(model: any){
    $('#exampleModal').modal('show');
  } 

  applyFilter(filterValue: string) {

    console.log(filterValue)
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}
