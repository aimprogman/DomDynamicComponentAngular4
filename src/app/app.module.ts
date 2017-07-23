import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DomNodeGeneratorComponent } from './dom-node-generator/dom-node-generator.component';

const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'about', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DomNodeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
