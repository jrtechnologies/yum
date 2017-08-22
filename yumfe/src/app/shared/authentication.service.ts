import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { LowerCasePipe } from '@angular/common';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as remote from '../remote';

const localStorageItem = "currentUser4";

@Injectable()
export class AuthenticationService {

  private user: remote.User;
  private token: string;
  private extAuth: string;
  private changes: Subject<string> = new Subject();

  constructor(private authService: remote.AuthApi, private conf: remote.Configuration, private lowerCase: LowerCasePipe) {
  }

  login(email: string, password: string, username: string): Observable<any> {
    // on successful login:
    // - stores the user details (firstName, lastName, id, role and token)
    // in a private object of the component.
    // - sets this.conf.apiKey
    // - persists the user details in localStorage

    let creds: remote.Login = { email: email, password: password, username: username };

    if (username.length > 0) { creds.email = creds.username; }

    //Parallel processing, login and get auth method:
    return Observable.forkJoin(

      this.getRemoteAuthMethod(),

      this.authService.authLoginPost(creds).map(response => {
        // login successful if there's a jwt token in the response
        if (response.token) {

          this.user = response.user;
          this.token = response.token;
          this.conf.apiKey = "Bearer " + response.token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(localStorageItem, JSON.stringify({ user: this.user, token: this.token, extAuth: this.extAuth }));

          // return true to indicate successful login
          return response.user.role;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch((error: any) => {
        return Observable.throw(error);
      })

    );
  }



  getLoggedInUser() {
    return this.user;
  }

  isLogged(): boolean {
    return (this.conf.apiKey !== undefined && this.token !== null);
  }

  bootstrapUser(): void {
     
    //Get remote auth setting
    // - loads user details from localStorage
    // - sets this.conf.apiKey
    // - retrieves the latest user details from backend. <--***************
    //    once received:
    //    - persists the new user details in localStorage
    //    - stores the new user details in the private object of the component
    var currentUser = JSON.parse(localStorage.getItem(localStorageItem));
    this.user = currentUser && currentUser.user;
    this.extAuth = currentUser && currentUser.extAuth;
    var token = currentUser && currentUser.token;
    if (token && token !== "") {
      this.token = token;
      this.conf.apiKey = "Bearer " + token;

      const jwt: string[]= this.token.split(".");
      const payload = JSON.parse(atob(jwt[1]));
      if(payload.exp && payload.exp>0){
        if(payload.exp <= new Date().getTime() / 1000){
          
        }
      }
    }
    

  }

  getToken(): string {
    return this.user ? this.token : null;
  }

  getObservableChange(): Subject<string> {
    return this.changes;
  }

  getLoggedInRole(): string {
    return this.user ? this.lowerCase.transform(this.user.role) : null;
  }

  updateUserDetailsHasPicture(hasPic: boolean) {
    this.user.hasPicture = hasPic;
    this.user.role.toLowerCase();
    this.changes.next(Math.random().toString(36).substring(7));
    localStorage.setItem(localStorageItem, JSON.stringify({ user: this.user, token: this.token, extAuth: this.extAuth }));
  }

  updateUserDetails(newUserDetails: remote.User) {
    // takes an object with firstName and lastName
    // this method is called when the user goes to /settings page and after PUT is successful
    // we need to change the user details of the loggedIn user
    // - updates firstName and lastName of the private object in the component
    // - persists the user details in localStorage
    this.user = newUserDetails;
    this.user.role.toLowerCase();
  
    this.changes.next(Math.random().toString(36).substring(7));

    localStorage.setItem(localStorageItem, JSON.stringify({ user: this.user, token: this.token, extAuth: this.extAuth }));
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    // removes the localStorage item
    // removes the apiKey in conf
    // removes the private object in the component storing the user details.
    localStorage.removeItem(localStorageItem);
    this.conf.apiKey = undefined;
    this.user = undefined;
    this.token = undefined;
  }


  public getRemoteAuthMethod(): Observable<String> {
    //Get authentication method from server
    return this.authService.authMethodGet().map(
      value => {
        this.extAuth = value;
        return value;
      }).catch((error: any) => {
        return Observable.throw(error);
      });


  }

  public hasExternalAuth(): Boolean { 
    if (this.extAuth === 'ldap') {
      return true;
    }
    else {
      return false;
    }
  }

}
