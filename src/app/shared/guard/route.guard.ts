import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Params,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {SessionService} from "../services/session.service";

@Injectable({
  providedIn: 'root'
})

export class RouteGuard implements CanActivate {
  isLoggedIn = false;
  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.isLoggedIn){
      return true;
    }else {
     this.router.navigate(['']);
    }
  }

}
