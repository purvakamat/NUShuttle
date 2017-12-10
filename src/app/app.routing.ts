import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './components/shared/register/register.component';
import {LoginComponent} from './components/shared/login/login.component';
import {ProfileComponent} from './components/shared/profile/profile.component';
import {ApitestComponent} from './components/apitest/apitest.component';
import {PickupComponent} from './components/apitest/pickup/pickup.component';
import {DropoffComponent} from './components/apitest/dropoff/dropoff.component';
import {DriverComponent} from './components/driver/driver.component';
import {SettingPanelComponent} from './components/admin/setting-panel/setting-panel.component';
import {ShortestpathComponent} from './components/apitest/shortestpath/shortestpath.component';
import {RidesListComponent} from './components/student/rides-list/rides-list.component';
import {RidesComponent} from './components/student/rides/rides.component';
import {MyrideComponent} from './components/student/myride/myride.component';
import {ScheduleListComponent} from './components/admin/schedule-panel/schedule-list/schedule-list.component';
import {DriverListComponent} from './components/admin/driver-panel/driver-list/driver-list.component';
import {ScheduleNewComponent} from './components/admin/schedule-panel/schedule-new/schedule-new.component';
import {ScheduleEditComponent} from './components/admin/schedule-panel/schedule-edit/schedule-edit.component';
import {DriverNewComponent} from './components/admin/driver-panel/driver-new/driver-new.component';
import {DriverEditComponent} from './components/admin/driver-panel/driver-edit/driver-edit.component';
import {AuthGuard} from './services/auth-guard.service';
import {AnonymousComponent} from './components/anonymous/anonymous.component';

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'apitest', component: ApitestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
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
  {path: 'rides', component: RidesComponent, canActivate: [AuthGuard]},
  {path: 'myride', component: MyrideComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'anonymous', component: AnonymousComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
