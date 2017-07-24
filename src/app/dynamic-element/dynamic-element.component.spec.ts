import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicElementComponent } from './dynamic-element.component';

describe('DynamicElementComponent', () => {
  let component: DynamicElementComponent;
  let fixture: ComponentFixture<DynamicElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
