import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {ApitestComponent} from './components/apitest/apitest.component';
import {HomeComponent} from './components/user/home/home.component';
import {PickupComponent} from './components/pickup/pickup.component';
import {DropoffComponent} from './components/dropoff/dropoff.component';

const APP_ROUTES: Routes = [
  {path: 'apitest', component: ApitestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/home', component: HomeComponent},
  {path: 'user/:uid/pickup', component: PickupComponent},
  {path: 'user/:uid/dropoff', component: DropoffComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
