import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
//import 'rxjs/add/operator/distinctUntilChanged';

import { AuthenticationService } from '../../shared/authentication.service';
import * as remote from '../../remote';

@Injectable()
export class BalanceService {

  private balance: BehaviorSubject<number>;

    constructor( private authenticationService: AuthenticationService, private hungryService: remote.HungryApi  ) {
      this.balance = new BehaviorSubject<number>(null);
    }

    public updateBalance(newBalance: number) {
      this.balance.next(newBalance);
    }

    public getBalance(): Observable<number> {
      return this.balance.distinctUntilChanged();
    }

}
