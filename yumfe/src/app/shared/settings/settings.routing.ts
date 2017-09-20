import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsRouteGuard} from './settings-route.guard';
import { SettingsComponent } from './settings.component';

const settingsRoutes: Routes = [
  { path: '', canActivate: [SettingsRouteGuard], component: SettingsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(settingsRoutes);