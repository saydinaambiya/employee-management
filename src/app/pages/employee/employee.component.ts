import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Employee} from "../../models/employee.model";
import {MatSort} from "@angular/material/sort";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'status', 'action']
  dataSource!: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: EmployeeService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData() {
    this.service.getEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  filterEmployee(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  onAddEmployee() {
    this.router.navigateByUrl('employee/add').finally();
  }

  onEditEmployee() {
    Swal.fire("Edit Data", "This is notification for edit data", "warning")
  }

  onDeleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe({
      next: (response) => {
        Swal.fire("Success", "Data is deleted", "success")
        this.getAllData()
      },
      error: () => {
        Swal.fire("Failed", "Something went wrong", "error")
      }
    })
  }

  onDetailEmployee(row:any){
    this.router.navigate(['employee/detail'],{state: row});
  }
}
