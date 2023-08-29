import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInHomeComponent } from './cart-in-home.component';

describe('CartInHomeComponent', () => {
  let component: CartInHomeComponent;
  let fixture: ComponentFixture<CartInHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartInHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
