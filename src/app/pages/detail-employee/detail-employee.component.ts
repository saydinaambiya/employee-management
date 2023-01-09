import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent{
  data: any = this.router.getCurrentNavigation()?.extras.state;
  constructor(private router: Router, private location: Location) {
  }

  onOK() {
    this.location.back();
  }
}
