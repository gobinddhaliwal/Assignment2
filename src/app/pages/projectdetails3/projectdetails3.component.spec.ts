import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectdetails3Component } from './projectdetails3.component';

describe('Projectdetails3Component', () => {
  let component: Projectdetails3Component;
  let fixture: ComponentFixture<Projectdetails3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Projectdetails3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Projectdetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
