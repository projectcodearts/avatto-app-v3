import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductPagePage } from './product-page.page';

describe('ProductPagePage', () => {
  let component: ProductPagePage;
  let fixture: ComponentFixture<ProductPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
