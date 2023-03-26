import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Teste01Component } from './views/teste01/teste01.component';
import { Teste02Component } from './views/teste02/teste02.component';
import { Teste03Component } from './views/teste03/teste03.component';
import { Testeexercicio02Component } from './views/testeexercicio02/testeexercicio02.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste01Component,
    Teste02Component,
    Teste03Component,
    Testeexercicio02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
