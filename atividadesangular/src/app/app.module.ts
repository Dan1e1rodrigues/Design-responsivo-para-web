import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ativ01Component } from './views/ativ01/ativ01.component';
import { Ativ02Component } from './views/ativ02/ativ02.component';

@NgModule({
  declarations: [
    AppComponent,
    Ativ01Component,
    Ativ02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
