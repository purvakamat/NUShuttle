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
import {QueueSlotService} from './services/queueslot.service.client'
import {HomeService} from "./services/home.service.client";

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAh8OY5Iqf02wY21IRqNkYP1AcqIvmSavI',
      libraries: ['places']
    })
  ],
  providers: [HttpModule, UserService, RideService, QueueSlotService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

