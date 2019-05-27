import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glam6Component } from './glam6.component';

describe('Glam6Component', () => {
  let component: Glam6Component;
  let fixture: ComponentFixture<Glam6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glam6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
