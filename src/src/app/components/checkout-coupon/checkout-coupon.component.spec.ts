import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckoutCouponComponent } from './checkout-coupon.component';

describe('CheckoutCouponComponent', () => {
  let component: CheckoutCouponComponent;
  let fixture: ComponentFixture<CheckoutCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCouponComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
