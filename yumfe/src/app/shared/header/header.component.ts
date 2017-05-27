import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import * as remote from '../../remote';
import { MdButtonModule, MdMenu, MdMenuTrigger } from '@angular/material';
import { AuthenticationService } from '../../shared/authentication.service';
import { BASE_PATH } from '../../remote/variables';
import { RouterLinkActive }  from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: remote.User;
  public role: string;
  public userPicture: string;
  public testClass: string = "MytestClass";
  public isOpen: boolean;
  public homepages: any[];
  public homepage: any[];

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger; //

  constructor(private authenticationService: AuthenticationService,
              @Inject(BASE_PATH) private baseUrl: string, private router: Router) { }

  ngOnInit() {

      this.user = this.authenticationService.getLoggedInUser();
      this.role = this.authenticationService.getLoggedInRole();

      this.userPicture = this.baseUrl + '/settings/picture/token?token='+this.authenticationService.getToken();

      this.authenticationService.getObservableChange().subscribe(
        value => {
          this.userPicture = this.baseUrl + '/settings/picture/token?token='+this.authenticationService.getToken()+"&change="+value;
          this.user = this.authenticationService.getLoggedInUser();
        }
      );
      //this.userPicture = this.baseUrl + '/settings/picture/token?token='+this.authenticationService.getToken();
     // setPositionClasses
      this.setDestinations();
      this.isOpen  = this.trigger.menuOpen;
  }

  getUser(){
    return this.user;
  }
  logOff(){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  triggerMenu() {
    this.trigger.openMenu();
  }


  setDestinations(){
      if(this.user.role=='admin'){
          this.homepages = [{display: "Hungry home page", destination:"hungry"},
          {display: "Chef home page", destination:"chef"},
          {display: "Admin home page", destination:"admin"}
          ];
      }
      else if(this.user.role=='chef'){
          this.homepages = [{display: "Hungry home page", destination:"hungry"},
          {display: "Chef home page", destination:"chef"}
          ];
      }

  }

  goToHomepage(homepage){

        if (homepage != null) {
          switch (homepage.destination) {
            case 'admin':
              this.router.navigate(['admin']);
              break;
            case 'hungry':
              this.router.navigate(['hungry']);
              break;
            case 'chef':
              this.router.navigate(['chef']);
              break;
           }
         }
  }

}
