import { Component, OnInit } from '@angular/core';
import * as remote from '../../remote';
import { MdButtonModule } from '@angular/material';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-logged',
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
}
