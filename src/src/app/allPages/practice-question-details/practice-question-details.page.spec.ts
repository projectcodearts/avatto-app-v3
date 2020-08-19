import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQuestionDetailsPage } from './practice-question-details.page';

describe('PracticeQuestionDetailsPage', () => {
  let component: PracticeQuestionDetailsPage;
  let fixture: ComponentFixture<PracticeQuestionDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQuestionDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQuestionDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
