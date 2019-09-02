import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BidiModule} from '@angular/cdk/bidi';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BidiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
