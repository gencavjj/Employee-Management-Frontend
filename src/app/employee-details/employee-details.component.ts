import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee-service/employee.service';
import { Employee } from '../employee-model/employee';
import { ActivatedRoute, Router } from '@angular/router';
  
@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  employeeId: number;
  employee: Employee;
 
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }
 
  ngOnInit() {
    this.employee = new Employee();

    this.employeeId = this.route.snapshot.params['employeeId'];

    this.employeeService.getEmployee(this.employeeId)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }
 
  list(){
    this.router.navigate(['employees']);
  }
}
