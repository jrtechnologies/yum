import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpSubjectService {
    //https://github.com/ReactiveX/rxjs/blob/master/doc/subject.mat
    //In our app.component.ts class we will subscribe to this Subjects
    public notificationSubject = new Subject();
    public http401Subject = new Subject();
    public http500Subject = new Subject();
    public httpCallSubject = new Subject();
    public httpErrorSubject = new Subject();

    constructor() { }

    //some Example methods we call in our CustomHttp Class
    public addNotification(resultJson: any): void {
        this.notificationSubject.next(resultJson);
    }

    public addHttp401(result: any): void {
        this.http401Subject.next(result);
    }

    public addHttp500(result: any): void {
        this.http500Subject.next(result);
    }

    public addHttpCall(url:any, options:any): void {
        this.httpCallSubject.next(url);
    }

    public addHttpError(result: any): void {
        this.httpErrorSubject.next(result);
    }
}