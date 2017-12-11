import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PickupComponent } from './components/apitest/pickup/pickup.component';
import { AgmCoreModule } from '@agm/core';
import { DropoffComponent } from './components/apitest/dropoff/dropoff.component';
import {ShortestpathComponent} from './components/apitest/shortestpath/shortestpath.component';
import {LoginComponent} from './components/shared/login/login.component';
import {ProfileComponent} from './components/shared/profile/profile.component';
import {RegisterComponent} from './components/shared/register/register.component';
import {Routing} from './app.routing';
import {UserService} from './services/user.service.client';
import { ApitestComponent } from './components/apitest/apitest.component';
import {DriverComponent} from './components/driver/driver.component';
import {RideService} from './services/ride.service.client';
import {QueueSlotService} from './services/queueslot.service.client';
import {DriverService} from './services/driver.service.client';
import { RidesComponent } from './components/student/rides/rides.component';
import { MyrideComponent } from './components/student/myride/myride.component';
import { RidesListComponent } from './components/student/rides-list/rides-list.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {SharedService} from './services/shared.service';
import {ScheduleListComponent} from './components/admin/schedule-panel/schedule-list/schedule-list.component';
import {ScheduleNewComponent} from './components/admin/schedule-panel/schedule-new/schedule-new.component';
import {ScheduleEditComponent} from './components/admin/schedule-panel/schedule-edit/schedule-edit.component';
import {DriverListComponent} from './components/admin/driver-panel/driver-list/driver-list.component';
import {DriverEditComponent} from './components/admin/driver-panel/driver-edit/driver-edit.component';
import {DriverNewComponent} from './components/admin/driver-panel/driver-new/driver-new.component';
import {StudentAuthGuard} from "./services/student-auth-guard.service";
import { AnonymousComponent } from './components/anonymous/anonymous.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminAuthGuard} from "./services/admin-auth-guard.service";
import {DriverAuthGuard} from "./services/driver-auth-guard.service";
import {AuthGuard} from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    PickupComponent,
    DropoffComponent,
    ShortestpathComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ApitestComponent,
    DriverComponent,
    RidesComponent,
    MyrideComponent,
    RidesListComponent,
    ScheduleListComponent,
    ScheduleNewComponent,
    ScheduleEditComponent,
    DriverListComponent,
    DriverNewComponent,
    DriverEditComponent,
    AnonymousComponent
  ],
  imports: [
    DateTimePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing,
    NgxCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAh8OY5Iqf02wY21IRqNkYP1AcqIvmSavI',
      libraries: ['places']
    })
  ],
  providers: [HttpModule, UserService, RideService, QueueSlotService, DriverService, SharedService, AuthGuard,
              StudentAuthGuard, AdminAuthGuard, DriverAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

