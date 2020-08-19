import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutusPagePage } from './aboutus-page.page';

describe('AboutusPagePage', () => {
  let component: AboutusPagePage;
  let fixture: ComponentFixture<AboutusPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutusPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
