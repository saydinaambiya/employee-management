import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'https://63b6a2d64f17e3a931ba51ca.mockapi.io/employee';
  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get<any>(this.baseUrl);
  }


  postEmployee(employee: Employee) {
    return this.http.post<any>(this.baseUrl, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
