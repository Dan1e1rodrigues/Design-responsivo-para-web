import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Atv01Component } from './views/atv01/atv01.component';
import { Atv02dataComponent } from './views/atv02data/atv02data.component';

@NgModule({
  declarations: [
    AppComponent,
    Atv01Component,
    Atv02dataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
