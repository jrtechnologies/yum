import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './shared/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AppRouteGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authenticationService.isLogged()){
        this.router.navigate(['/'+this.authenticationService.getLoggedInRole()]);
        return false;
      }
      else{
         return true; // this will go to login page
        }
    }
}
