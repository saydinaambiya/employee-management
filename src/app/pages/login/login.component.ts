import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginToken} from "../../auth/models/login.model";
import {AuthService} from "../../auth/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginField} from "../../auth/models/login-field.model";
import {map} from "rxjs";
import Swal from 'sweetalert2'
import {SessionService} from "../../shared/services/session.service";
import {RouteGuard} from "../../shared/guard/route.guard";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  field: typeof LoginField = LoginField;
  showPassword: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sessionService: SessionService,
    private routeGuard: RouteGuard,
  ) {
  }

  buildForm(): void {
    this.loginForm = new FormGroup({
      [LoginField.EMAIL]: new FormControl('', [Validators.required, Validators.email]),
      [LoginField.PASSWORD]: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {
    this.buildForm();

    const authorize: boolean = (this.sessionService.get('token') !== null);
    if (authorize){
      this.routeGuard.isLoggedIn = true;
      this.router.navigateByUrl('employee').finally();
    }
  }

  onShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    const payload = this.loginForm.value
    const token: LoginToken | null = this.authService.login(payload);
    if (token) {
      this.routeGuard.isLoggedIn = true;
      this.router.navigateByUrl('employee');
      // this.activatedRoute.queryParams
      //   .pipe(map((params) => params['next'] || null))
      //   .subscribe((next: string = '') => {
      //     this.router.navigateByUrl(next).finally();
      //   });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid',
        text: 'Invalid Email or Password'
      });
    }
  }

  isFieldValid(loginField: LoginField): string {
    const control: AbstractControl = this.loginForm.get(loginField) as AbstractControl;
    if (control && control.touched && control.invalid) {
      return 'is-invalid';
    } else if (control && control.invalid) {
      return 'is-valid';
    } else {
      return '';
    }
  }
}


