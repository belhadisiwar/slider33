import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glam4Component } from './glam4.component';

describe('Glam4Component', () => {
  let component: Glam4Component;
  let fixture: ComponentFixture<Glam4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glam4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
