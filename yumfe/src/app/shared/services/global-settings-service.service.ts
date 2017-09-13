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

  public getDeadLine(): Observable<any> {
    return new Observable(observer => {
      this.getSettings().subscribe(settings => {
        const deadlineDays: number = settings.deadlineDays;
        const parts = settings.deadline.split(':');
        const deadlineTime = new Date(2000, 0, 1, parts[0], parts[1] );
        const deadline = {
          dDays: deadlineDays, dTime: deadlineTime
        };
        observer.next(deadline);
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
