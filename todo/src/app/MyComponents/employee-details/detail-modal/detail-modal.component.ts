import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/Employee';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {

  constructor() { }

  @Input() data: Employee;

  ngOnInit(): void {
    console.log( "Modal: " + JSON.stringify(this.data))
  }

}
