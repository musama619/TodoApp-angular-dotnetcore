import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/_models/Employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {


  dataSource: any;
  modelData: Employee;

  constructor(private empService: EmployeeService, private toastr: ToastrService) {
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

  getData(){
    this.empService.getEmployees().subscribe((response) => {
      this.dataSource = response;
      this.modelData = Object.assign(response);
    });
  }
  editEmployee(model: any) {
    this.sendModal = model;
    console.log('inside' + JSON.stringify(model));
    $('#exampleModal').modal('show');
  }

  deleteEmployee(model:Employee){
    
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
        console.log("confirmed")
        this.empService.deleteEmployee(model.id).subscribe(response => {
          this.toastr.success("Successful")
          Swal.fire('Deleted!', '"' + model.employeeName + '" has been deleted.', 'success');
          this.getData();

      }, error => {
        Swal.fire('Error!', '"' + model.employeeName + '" cannot be deleted.', 'error');
        this.getData();
      });


       
      }
    });
  }
}
