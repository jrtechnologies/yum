import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import * as remote from '../../remote';

@Injectable()
export class ControlUserService {

  private controlledUser: BehaviorSubject<remote.User>;

  constructor( private adminApi: remote.AdminApi  ) { 
    this.controlledUser = new BehaviorSubject<remote.User>(null);
  }

  public setUser(userid: number){

    if(userid==0) {
        this.controlledUser.next(null);
        return;
    }

    this.adminApi.usersIdGet(userid).subscribe(user => {
        console.log(user);
        this.controlledUser.next(user);  
      }, error => {
        console.log(error)
      });

  }

  public getUser(){
    return this.controlledUser;
  }
}