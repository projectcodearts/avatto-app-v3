import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAddressPage } from './user-address.page';

describe('UserAddressPage', () => {
  let component: UserAddressPage;
  let fixture: ComponentFixture<UserAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
