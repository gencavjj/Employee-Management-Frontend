import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee-model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }

  public getEmployee(employee_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employee_id}`);
  }

  public createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, employee);
  }

  public updateEmployee(employee_id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${employee_id}`, value);
  }

  public deleteEmployee(employee_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employee_id}`, { responseType: 'text' });
  }

  public getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public save(employee: Object) {
    return this.http.post<Object>(this.baseUrl, employee);
  }

  public deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
