import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './views/ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { Ex05Component } from './views/ex05/ex05.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    Ex05Component
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
