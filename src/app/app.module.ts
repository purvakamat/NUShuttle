import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PickupComponent } from './components/pickup/pickup.component';
import { AgmCoreModule } from '@agm/core';
import { DropoffComponent } from './components/dropoff/dropoff.component';

@NgModule({
  declarations: [
    AppComponent,
    PickupComponent,
    DropoffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGG-wkSH660bvqdSp-zIByzIzYPGqvfiQ',
      libraries: ['places']
    })
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
