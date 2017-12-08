import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {ApitestComponent} from './components/apitest/apitest.component';
import {HomeComponent} from './components/user/home/home.component';
import {PickupComponent} from './components/pickup/pickup.component';
import {DropoffComponent} from './components/dropoff/dropoff.component';
import {DriverComponent} from './components/user/driver/driver.component';
import {SchedulePanelComponent} from './components/admin/schedule-panel/schedule-panel.component';
import {DriverPanelComponent} from './components/admin/driver-panel/driver-panel.component';
import {SettingPanelComponent} from './components/admin/setting-panel/setting-panel.component';
import {ShortestpathComponent} from './components/shortestpath/shortestpath.component';

const APP_ROUTES: Routes = [
  {path: 'apitest', component: ApitestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/home', component: HomeComponent},
  {path: 'user/:uid/pickup', component: PickupComponent},
  {path: 'user/:uid/dropoff', component: DropoffComponent},
  {path: 'user/:uid/driver', component: DriverComponent},
  {path: 'user/:uid/admin/schedule-panel', component: SchedulePanelComponent},
  {path: 'user/:uid/admin/driver-panel', component: DriverPanelComponent},
  {path: 'user/:uid/admin/setting-panel', component: SettingPanelComponent},
  {path: 'user/:uid/driver/ride/:rid', component: ShortestpathComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
