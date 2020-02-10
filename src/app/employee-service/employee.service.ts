import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployee(employeeID: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeID}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(employeeID: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${employeeID}`, value);
  }

  deleteEmployee(employeeID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employeeID}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
