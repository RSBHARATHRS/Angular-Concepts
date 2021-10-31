import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horizontal1Component } from './horizontal1.component';

describe('Horizontal1Component', () => {
  let component: Horizontal1Component;
  let fixture: ComponentFixture<Horizontal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Horizontal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Horizontal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
