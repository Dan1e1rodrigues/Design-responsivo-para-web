import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Atv01Component } from './views/atv01/atv01.component';
import { Atv02dataComponent } from './views/atv02data/atv02data.component';
import { Atv03Component } from './views/atv03/atv03.component';
import { Atv04Component } from './views/atv04/atv04.component';

@NgModule({
  declarations: [
    AppComponent,
    Atv01Component,
    Atv02dataComponent,
    Atv03Component,
    Atv04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
