import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { GraphTestComponent } from './graph/testing';

import { PapaParseModule } from 'ngx-papaparse';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    GraphTestComponent
  ],
  imports: [
    BrowserModule,
    PapaParseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
