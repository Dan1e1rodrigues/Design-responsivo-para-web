import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex03Component,
    Ex04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
