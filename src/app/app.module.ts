import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DomNodeGeneratorComponent } from './dom-node-generator/dom-node-generator.component';
import { DynamicElementComponent } from './dynamic-element/dynamic-element.component';


@NgModule({
  declarations: [
    AppComponent,
    DomNodeGeneratorComponent,
    DynamicElementComponent
  ],
  entryComponents: [DynamicElementComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
