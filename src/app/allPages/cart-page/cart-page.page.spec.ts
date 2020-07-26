import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartPagePage } from './cart-page.page';

describe('CartPagePage', () => {
  let component: CartPagePage;
  let fixture: ComponentFixture<CartPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
