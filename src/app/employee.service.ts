import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  getEmployee(employee_id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${employee_id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, employee);
  }

  updateEmployee(employee_id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${employee_id}`, value);
  }

  deleteEmployee(employee_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employee_id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
