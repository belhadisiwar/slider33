import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glam1Component } from './glam1.component';

describe('Glam1Component', () => {
  let component: Glam1Component;
  let fixture: ComponentFixture<Glam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
