import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { DuasviasComponent } from './views/duasvias/duasvias.component';
import { FormsModule } from '@angular/forms';
import { Duasvias01Component } from './views/duasvias01/duasvias01.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex03Component,
    Ex04Component,
    DuasviasComponent,
    Duasvias01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
