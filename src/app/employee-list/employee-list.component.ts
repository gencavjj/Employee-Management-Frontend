import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeService } from '../employee-service/employee.service';
import { Employee } from '../employee-model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<any[]>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    },
    error => console.log(error)
    )
  }
}