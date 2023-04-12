import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Atv01Component } from './views/atv01/atv01.component';
import { Atv02dataComponent } from './views/atv02data/atv02data.component';
import { Atv03Component } from './views/atv03/atv03.component';
import { Atv04Component } from './views/atv04/atv04.component';
import { Atividade03Component } from './views/atividade03/atividade03.component';
import { Atv05Component } from './views/atv05/atv05.component';
import { Atv06Component } from './views/atv06/atv06.component';
import { Atv07Component } from './views/atv07/atv07.component';

@NgModule({
  declarations: [
    AppComponent,
    Atv01Component,
    Atv02dataComponent,
    Atv03Component,
    Atv04Component,
    Atividade03Component,
    Atv05Component,
    Atv06Component,
    Atv07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
