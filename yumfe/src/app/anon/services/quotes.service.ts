import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class QuotesService {

  //private actionUrl: string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  private actionUrl: string = "http://quotes.rest/qod.json?category=inspire";
  constructor(private http: HttpClient) { }

  public getQuote<T>(): Observable<T> {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    //Example using headers
    // httpHeaders = httpHeaders.append('Content-Type', 'text/plain');
    // httpHeaders = httpHeaders.append('Cache-Control', 'no-cache');
    // httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', '*');
    // httpHeaders = httpHeaders.append('Access-Control-Request-Headers', 'Access-Control-Allow-Origin');
    return this.http.get<T>(this.actionUrl,
      //{headers: httpHeaders}
    );
  }
}


@Injectable()
export class QuoteInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (!req.headers.has('Content-Type')) {
    //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    // }

    return next.handle(req);
  }
}