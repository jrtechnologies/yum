import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response, HttpModule, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpSubjectService } from './httpSubject.service';



@Injectable()
export class InterceptHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private httpSubjectService: HttpSubjectService) {
        super(backend, defaultOptions);

        //Prevent Ajax Request Caching for Internet Explorer
        defaultOptions.headers.append("Cache-control", "no-cache");
        defaultOptions.headers.append("Cache-control", "no-store");
        defaultOptions.headers.append("Pragma", "no-cache");
        defaultOptions.headers.append("Expires", "0");
        defaultOptions.headers.append("Access-Control-Allow-Origin", "*");
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

        return super.request(url, options).map(res => {
            //Successful Response;
            //this.httpSubjectService.addNotification(res.json());
            return res;
        }).catch((err) => {
            console.log(url, options);
            if (err.status === 401) {
                this.httpSubjectService.addHttp401(err);
                return Observable.throw(err);
            } else if (err.status === 500) {
                this.httpSubjectService.addHttp500(err);
                return Observable.throw(err);
            } else {
               // return Observable.empty();
                return Observable.throw(err);
            }
        })
            .finally(() => {
                //After the request;
                //this.httpSubjectService.removeSpinner();
            });
    }


}
export function interceptHttpLoader(backend: XHRBackend, defaultOptions: RequestOptions, httpSubjectService: HttpSubjectService) {
    return new InterceptHttp(backend, defaultOptions, httpSubjectService);
}