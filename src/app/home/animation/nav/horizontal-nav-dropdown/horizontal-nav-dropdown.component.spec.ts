import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNavDropdownComponent } from './horizontal-nav-dropdown.component';

describe('HorizontalNavDropdownComponent', () => {
  let component: HorizontalNavDropdownComponent;
  let fixture: ComponentFixture<HorizontalNavDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalNavDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
