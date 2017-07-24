import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-element',
  template: '<div [innerHTML]="htmlTemplate"><div>'
})
export class DynamicElementComponent {

  @Input() htmlTemplate: string = "";

}
