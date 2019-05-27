import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glam5Component } from './glam5.component';

describe('Glam5Component', () => {
  let component: Glam5Component;
  let fixture: ComponentFixture<Glam5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glam5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
