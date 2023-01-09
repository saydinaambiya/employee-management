import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../pages/login/login.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path:'logout',
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
