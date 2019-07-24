import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee-service/employee.service';
import { Employee } from '../employee-model/employee';
 
import { EmployeeListComponent } from '../employee-list/employee-list.component';
 
@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  @Input() employee: Employee;
 
  constructor(private employeeService: EmployeeService, private listComponent: EmployeeListComponent) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.employeeService.updateEmployee(this.employee.employee_id,
      { firstname: this.employee.first_name, lastname: this.employee.last_name, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.employee = data as Employee;
        },
        error => console.log(error));
  }
}
