import { Routes, RouterModule }                   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { LoggedComponent } from '../shared/logged/logged.component';
import {HungryRouteGuard} from './hungry-route.guard';

const hungryRoutes: Routes = [
  { path: 'hungry',
    component: LoggedComponent,
    canActivate: [HungryRouteGuard],
    children: [
      { path: '', component: HomeComponent ,   data: { state: 'home' }},
      { path: 'history', component: HistoryComponent, data: { state: 'history' } },
      { path: 'history/:year/:month', component: HistoryComponent, data: { state: 'home' } },
      { path: ':year/:week', component: HomeComponent, data: { state: 'home' } },
    ]
  }
];

export const HungryRouting = RouterModule.forChild(hungryRoutes);
