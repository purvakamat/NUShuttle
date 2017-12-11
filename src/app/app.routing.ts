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
import {StudentAuthGuard} from './services/student-auth-guard.service';
import {AnonymousComponent} from './components/anonymous/anonymous.component';
import {AuthGuard} from "./services/auth-guard.service";
import {AdminAuthGuard} from "./services/admin-auth-guard.service";
import {DriverAuthGuard} from "./services/driver-auth-guard.service";

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'apitest', component: ApitestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pickup', component: PickupComponent},
  {path: 'dropoff', component: DropoffComponent},
  {path: 'driver', component: DriverComponent,canActivate: [DriverAuthGuard]},
  {path: 'admin-schedules', component: ScheduleListComponent,canActivate: [AdminAuthGuard]},
  {path: 'admin-new-schedule', component: ScheduleNewComponent,canActivate: [AdminAuthGuard]},
  {path: 'admin-edit-schedule/:rid', component: ScheduleEditComponent,canActivate: [AdminAuthGuard]},
  {path: 'admin-drivers', component: DriverListComponent,canActivate: [AdminAuthGuard]},
  {path: 'admin-new-driver', component: DriverNewComponent,canActivate: [AdminAuthGuard]},
  {path: 'admin-edit-driver/:did', component: DriverEditComponent,canActivate: [AdminAuthGuard]},
  {path: 'shortest-path/:rid', component: ShortestpathComponent},
  {path: 'rides-list', component: RidesListComponent, canActivate: [StudentAuthGuard]},
  {path: 'rides', component: RidesComponent, canActivate: [StudentAuthGuard]},
  {path: 'myride', component: MyrideComponent, canActivate: [StudentAuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'anonymous', component: AnonymousComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
