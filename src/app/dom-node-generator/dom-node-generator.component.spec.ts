import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomNodeGeneratorComponent } from './dom-node-generator.component';

describe('DomNodeGeneratorComponent', () => {
  let component: DomNodeGeneratorComponent;
  let fixture: ComponentFixture<DomNodeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomNodeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomNodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
