import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOPsComponent } from './oops.component';

describe('OOPsComponent', () => {
  let component: OOPsComponent;
  let fixture: ComponentFixture<OOPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OOPsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OOPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
