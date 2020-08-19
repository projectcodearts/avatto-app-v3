import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckoutPagePage } from './checkout-page.page';

describe('CheckoutPagePage', () => {
  let component: CheckoutPagePage;
  let fixture: ComponentFixture<CheckoutPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
