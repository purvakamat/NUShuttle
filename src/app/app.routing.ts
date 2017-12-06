import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RegisterComponent} from './components/user/register/register.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {ApitestComponent} from './components/apitest/apitest.component';
import {HomeComponent} from './components/user/home/home.component';

const APP_ROUTES: Routes = [
  {path: 'apitest', component: ApitestComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/home', component: HomeComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
