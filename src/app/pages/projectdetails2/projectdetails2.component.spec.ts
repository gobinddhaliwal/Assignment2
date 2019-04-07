import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectdetails2Component } from './projectdetails2.component';

describe('Projectdetails2Component', () => {
  let component: Projectdetails2Component;
  let fixture: ComponentFixture<Projectdetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projectdetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projectdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
