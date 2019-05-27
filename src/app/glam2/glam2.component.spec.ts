import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glam2Component } from './glam2.component';

describe('Glam2Component', () => {
  let component: Glam2Component;
  let fixture: ComponentFixture<Glam2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glam2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
