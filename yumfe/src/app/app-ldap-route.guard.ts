import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AppLdapRouteGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( environment.use_ldap) {
       this.router.navigate(['/']);
    } else {
      return true;
    }
  }
}
