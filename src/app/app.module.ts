import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DigFireModule} from '@dig-platform/dig-fire';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DigFireModule.forRoot({
      initialState: {
        title: 'DigFire Demo'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
