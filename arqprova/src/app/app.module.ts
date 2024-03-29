import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { Atv08Component } from './views/atv08/atv08.component';
import { Atv09Component } from './views/atv09/atv09.component';
import { Atv10Component } from './views/atv10/atv10.component';
import { Atv11Component } from './views/atv11/atv11.component';
import { Atv12Component } from './views/atv12/atv12.component';
import { Atv13Component } from './views/atv13/atv13.component';

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
    Atv07Component,
    Atv08Component,
    Atv09Component,
    Atv10Component,
    Atv11Component,
    Atv12Component,
    Atv13Component
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
