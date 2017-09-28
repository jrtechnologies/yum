import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../shared/authentication.service'
import { Router } from '@angular/router';

@Injectable()
export class AdminRouteGuard implements CanActivate, CanLoad {

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this.authenticationService.getLoggedInRole() === 'admin' ) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
  
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authenticationService.isLogged()) { return true; }
  
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
