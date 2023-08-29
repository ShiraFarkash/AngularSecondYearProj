import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GewelesRingsComponent } from './geweles-rings.component';

describe('GewelesRingsComponent', () => {
  let component: GewelesRingsComponent;
  let fixture: ComponentFixture<GewelesRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GewelesRingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GewelesRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
