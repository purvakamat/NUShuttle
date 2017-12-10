import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './components/shared/register/register.component';
import {LoginComponent} from './components/shared/login/login.component';
import {ProfileComponent} from './components/shared/profile/profile.component';
import {ApitestComponent} from './components/apitest/apitest.component';
import {PickupComponent} from './components/apitest/pickup/pickup.component';
import {DropoffComponent} from './components/apitest/dropoff/dropoff.component';
import {DriverComponent} from './components/driver/driver.component';
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
  {path: 'pickup', component: PickupComponent},
  {path: 'dropoff', component: DropoffComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'admin-schedules', component: ScheduleListComponent},
  {path: 'admin-new-schedule', component: ScheduleNewComponent},
  {path: 'admin-edit-schedule/:rid', component: ScheduleEditComponent},
  {path: 'admin-drivers', component: DriverListComponent},
  {path: 'admin-new-driver', component: DriverNewComponent},
  {path: 'admin-edit-driver/:did', component: DriverEditComponent},
  {path: 'shortest-path/:rid', component: ShortestpathComponent},
  {path: 'rides-list', component: RidesListComponent, canActivate: [AuthGuard]},
  {path: 'rides', component: RidesComponent, canActivate: [AuthGuard]},
  {path: 'myride', component: MyrideComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'anonymous', component: AnonymousComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
