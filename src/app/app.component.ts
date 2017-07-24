import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<dom-node-generator [httpUrl]="httpUrl"></dom-node-generator>'
})
export class AppComponent{
  httpUrl = 'assets/data/model.json';
}
