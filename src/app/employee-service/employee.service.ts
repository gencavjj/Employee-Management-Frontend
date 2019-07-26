import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployee(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(employeeId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${employeeId}`, value);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employeeId}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
