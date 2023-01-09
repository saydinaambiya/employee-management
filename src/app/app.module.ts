import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DetailEmployeeComponent } from './pages/detail-employee/detail-employee.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from "@angular/material/icon";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {RouteGuard} from "./shared/guard/route.guard";
import {LogoutComponent} from "./auth/logout/logout.component";
import {AuthModule} from "./auth/auth.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent, canActivate:[RouteGuard]},
  {path: 'employee/add', component: AddEmployeeComponent, canActivate:[RouteGuard]},
  {path: 'employee/detail', component: DetailEmployeeComponent, canActivate:[RouteGuard]},
  {path:'logout', component:LogoutComponent, canActivate:[RouteGuard]},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DetailEmployeeComponent,
    HeaderComponent,
    AddEmployeeComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
