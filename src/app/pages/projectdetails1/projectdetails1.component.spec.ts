import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectdetails1Component } from './projectdetails1.component';

describe('Projectdetails1Component', () => {
  let component: Projectdetails1Component;
  let fixture: ComponentFixture<Projectdetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projectdetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projectdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
