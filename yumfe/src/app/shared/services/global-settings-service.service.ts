import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as remote from '../../remote';

@Injectable()
export class GlobalSettingsService {

  private observable;

  constructor(
    private settingsService: remote.AdminApi 
  ) { }

  private getSettings() {

    if (this.observable === undefined) {
      this.observable = Observable.defer(() => this.settingsService.globalsettingsGet())
      .publishReplay(1, 10 )
      .refCount()
      .take(1);
    }
    return this.observable;
  }

  public getDeadLine(): Observable<Date> {
    return new Observable(observer => {
      this.getSettings().subscribe(settings => {
        const d: Date = new Date();
        d.setTime( Date.parse('2000-1-1 ' + settings.deadline));
        observer.next(d);
        observer.complete();
      } );
    });
  }

  public getCurrency(): Observable<string> {
    return new Observable(observer => {
      this.getSettings().subscribe(settings => {
        observer.next(settings.currency);
        observer.complete();
      } );
    });
  }

  public getTerms(): Observable<string> {
    return new Observable(observer => {
      this.getSettings().subscribe(settings => {
        observer.next(settings.tos);
        observer.complete();
      } );
    });
  }

  public getPolicy(): Observable<string> {
    return new Observable(observer => {
      this.getSettings().subscribe(settings => {
        observer.next(settings.policy);
        observer.complete();
      } );
    });
  }

  public getNotes(): Observable<string> {
    return new Observable(observer => {
      this.getSettings().subscribe(settings => {
        observer.next(settings.notes);
        observer.complete();
      } );
    });
  }


}
