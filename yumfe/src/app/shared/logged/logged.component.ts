import { Component, OnInit } from '@angular/core';
import * as remote from '../../remote';
import { MdButtonModule } from '@angular/material';
import { AuthenticationService } from '../../shared/authentication.service';
import { routerTransition } from './router.animations';
@Component({
  selector: 'app-logged',
  animations: [ routerTransition ],
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  private user: remote.User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {

      this.user = this.authenticationService.getLoggedInUser();

  }

  getUser(){
    return this.user;
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  animationStarted(event){
    //console.log(event);
  }

  animationDone(event){
    console.log(event);
  }
}
