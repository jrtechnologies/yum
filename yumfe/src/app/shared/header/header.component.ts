import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import * as remote from '../../remote';
import { MdButtonModule, MdMenu, MdMenuTrigger } from '@angular/material';
import { AuthenticationService } from '../../shared/authentication.service';
import { BASE_PATH } from '../../remote/variables';
import { Router, ActivatedRoute, RouterLinkActive, NavigationEnd } from '@angular/router';
import { ControlUserService } from '../services/control-user.service';

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
  public controlUser: remote.User;

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger; //

  constructor(private authenticationService: AuthenticationService,
    @Inject(BASE_PATH) private baseUrl: string, private router: Router, private route: ActivatedRoute, private controlUserService: ControlUserService, private location: Location) { }

  ngOnInit() {

    this.router.events.subscribe((event) => { 
        if(event instanceof NavigationEnd) {
            //console.log(event);
           if(!event.url.startsWith('/hungry') && this.controlUser!=null){
            //console.log("Stop control");
            this.controlUserService.setUser(0);
           // console.log(this.location.path());
           // this.location.replaceState(this.location.path(), "");
           }
        }
    });

    this.route.queryParams.subscribe(params => {

      let userid = +params['userid'] || 0;
      //uncomment if want to keep controlled user
      if (!userid) return;
      this.controlUserService.setUser(userid);

    });

    this.controlUserService.getUser().subscribe(user=>{
      this.controlUser=user;
    });

    this.user = this.authenticationService.getLoggedInUser();
    this.role = this.authenticationService.getLoggedInRole();

    this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.authenticationService.getToken();

    this.authenticationService.getObservableChange().subscribe(
      value => {
        this.userPicture = this.baseUrl + '/settings/picture/token?token=' + this.authenticationService.getToken() + "&change=" + value;
        this.user = this.authenticationService.getLoggedInUser();
      }
    );
    //this.userPicture = this.baseUrl + '/settings/picture/token?token='+this.authenticationService.getToken();
    // setPositionClasses
    this.setDestinations();
    this.isOpen = this.trigger.menuOpen;
  }

  getUser() {
    return this.user;
  }
  logOff() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  triggerMenu() {
    this.trigger.openMenu();
  }


  setDestinations() {
    if (this.user.role == 'admin') {
      this.homepages = [{ display: "Hungry home page", destination: "hungry" },
      { display: "Chef home page", destination: "chef" },
      { display: "Admin home page", destination: "admin" }
      ];
    }
    else if (this.user.role == 'chef') {
      this.homepages = [{ display: "Hungry home page", destination: "hungry" },
      { display: "Chef home page", destination: "chef" }
      ];
    }

  }

  public goToHomepage(homepage) {

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

  exitControlUser(){     
    
     this.controlUserService.setUser(0);
     this.router.navigate(['/hungry']);
  }

}
