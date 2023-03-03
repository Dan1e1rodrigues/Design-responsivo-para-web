import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { Auula3Component } from './ex1/auula3/auula3.component';
import { Ex2Component } from './ex2/ex2/ex2.component';
import { Ex03Component } from './views/ex03/ex03.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Auula3Component,
    Ex2Component,
    Ex03Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
