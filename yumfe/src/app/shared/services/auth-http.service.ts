import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest , HttpResponse, HttpEventType} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService:AuthenticationService){}

     
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      console.log("intercept");
    // Get the auth header from the service.
   // const authHeader = this.auth.getAuthorizationHeader();
    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', '*')});
    // Pass on the cloned request instead of the original request.
    //return next.handle(authReq);

        return next.handle(authReq).do(event => {
          console.log("EVENT");
          console.log(`Request for ${req.urlWithParams}`);

        }, err => {
            //if (err instanceof HttpErrorResponse && err.status == 401) {
                // handle 401 errors

                console.log("401");
                this.authService.logout();
           // }
        });
    }
}