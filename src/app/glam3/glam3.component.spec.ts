import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glam3Component } from './glam3.component';

describe('Glam3Component', () => {
  let component: Glam3Component;
  let fixture: ComponentFixture<Glam3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glam3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
