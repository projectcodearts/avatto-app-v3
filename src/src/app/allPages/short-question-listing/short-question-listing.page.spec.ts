import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortQuestionListingPage } from './short-question-listing.page';

describe('ShortQuestionListingPage', () => {
  let component: ShortQuestionListingPage;
  let fixture: ComponentFixture<ShortQuestionListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortQuestionListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortQuestionListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
