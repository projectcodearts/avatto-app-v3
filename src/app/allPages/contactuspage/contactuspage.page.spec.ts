import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactuspagePage } from './contactuspage.page';

describe('ContactuspagePage', () => {
  let component: ContactuspagePage;
  let fixture: ComponentFixture<ContactuspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactuspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactuspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
