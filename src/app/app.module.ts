import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerlistComponent } from './shared/components/passengerlist/passengerlist.component';
import { PassengercardComponent } from './shared/components/passengercard/passengercard.component';


@NgModule({
  declarations: [
    AppComponent,
    PassengerlistComponent,
    PassengercardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
