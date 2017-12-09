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
import {RidesListComponent} from './components/student/rides-list/rides-list.component';
import {RidesComponent} from './components/student/rides/rides.component';
import {MyrideComponent} from './components/student/myride/myride.component';
import {ScheduleListComponent} from './components/admin/schedule-panel/schedule-list/schedule-list.component';
import {DriverListComponent} from './components/admin/driver-panel/driver-list/driver-list.component';
import {ScheduleNewComponent} from './components/admin/schedule-panel/schedule-new/schedule-new.component';
import {ScheduleEditComponent} from './components/admin/schedule-panel/schedule-edit/schedule-edit.component';
import {DriverNewComponent} from "./components/admin/driver-panel/driver-new/driver-new.component";
import {DriverEditComponent} from "./components/admin/driver-panel/driver-edit/driver-edit.component";

const APP_ROUTES: Routes = [
  {path: 'apitest', component: ApitestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/home', component: HomeComponent},
  {path: 'user/:uid/pickup', component: PickupComponent},
  {path: 'user/:uid/dropoff', component: DropoffComponent},
  {path: 'user/:uid/driver', component: DriverComponent},
  {path: 'user/:uid/admin/schedules', component: ScheduleListComponent},
  {path: 'user/:uid/admin/schedules/new', component: ScheduleNewComponent},
  {path: 'user/:uid/admin/schedules/:rid', component: ScheduleEditComponent},
  {path: 'user/:uid/admin/drivers', component: DriverListComponent},
  {path: 'user/:uid/admin/drivers/new', component: DriverNewComponent},
  {path: 'user/:uid/admin/drivers/:did', component: DriverEditComponent},
  {path: 'user/:uid/admin/setting-panel', component: SettingPanelComponent},
  {path: 'user/:uid/driver/ride/:rid', component: ShortestpathComponent},
  {path: 'rides-list', component: RidesListComponent},
  {path: 'rides', component: RidesComponent},
  {path: 'myride', component: MyrideComponent},
  {path: 'profile', component: ProfileComponent},
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
