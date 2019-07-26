import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee-service/employee.service';
import { Employee } from '../employee-model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.employees = this.employeeService.getEmployeesList();
    }

    deleteEmployee(employeeId: number) {
      this.employeeService.deleteEmployee(employeeId)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    employeeDetails(employeeId: number){
      this.router.navigate(['details', employeeId]);
    }
  }