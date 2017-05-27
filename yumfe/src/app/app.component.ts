import { Component } from '@angular/core';
import {AuthenticationService}  from './shared/authentication.service';

import * as remote from './remote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private authService: AuthenticationService
    ){}

    ngOnInit(): void {
        this.authService.bootstrapUser();
    }

}
