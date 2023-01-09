import {Component, Inject, OnInit} from '@angular/core';
import {Group} from "../../models/group.model";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import Swal from "sweetalert2";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private location: Location,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService) {
  }

  endDate = new Date(Date.now())

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      salary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });

    console.log(this.editData)
  }

  hasError() {
    return this.employeeForm.controls['email'].status === 'INVALID' ? 'Email not valid' : '';
  }

  onClose() {
    this.location.back();
  }

  groups: Group[] = [
    {value: 'group-01', viewValue: 'Group 1'},
    {value: 'group-02', viewValue: 'Group 2'},
    {value: 'group-03', viewValue: 'Group 3'},
    {value: 'group-04', viewValue: 'Group 4'},
    {value: 'group-05', viewValue: 'Group 5'},
    {value: 'group-06', viewValue: 'Group 6'},
    {value: 'group-07', viewValue: 'Group 7'},
    {value: 'group-08', viewValue: 'Group 8'},
    {value: 'group-09', viewValue: 'Group 9'},
    {value: 'group-10', viewValue: 'Group 10'}
  ]

  onAddEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.postEmployee(this.employeeForm.value).subscribe({
        next: (response) => {
          Swal.fire("Success", "Employee is added", "success");
          this.employeeForm.reset();
          this.location.back();
        },
        error: () => {
          Swal.fire("Failed", "Something went wrong", "error");
        }
      })
    }
  }
}
