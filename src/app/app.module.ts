import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { AgmCoreModule } from '@agm/core';
import { DropoffComponent } from './components/dropoff/dropoff.component';
import {ShortestpathComponent} from './components/shortestpath/shortestpath.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {Routing} from './app.routing';
import {UserService} from './services/user.service.client';
import { ApitestComponent } from './components/apitest/apitest.component';
import { HomeComponent } from './components/user/home/home.component';
import {DriverComponent} from './components/user/driver/driver.component';
import {RideService} from './services/ride.service.client';
import {QueueSlotService} from './services/queueslot.service.client';
import {HomeService} from './services/home.service.client';
import {DriverService} from './services/driver.service.client';
import { SchedulePanelComponent } from './components/admin/schedule-panel/schedule-panel.component';
import { DriverPanelComponent } from './components/admin/driver-panel/driver-panel.component';
import { SettingPanelComponent } from './components/admin/setting-panel/setting-panel.component';
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
    HomeComponent,
    DriverComponent,
    SchedulePanelComponent,
    DriverPanelComponent,
    SettingPanelComponent,
    RidesComponent,
    MyrideComponent,
    RidesListComponent,
    ScheduleListComponent,
    ScheduleNewComponent,
    ScheduleEditComponent,
    DriverListComponent,
    DriverNewComponent,
    DriverEditComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [HttpModule, UserService, RideService, QueueSlotService, HomeService, DriverService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

