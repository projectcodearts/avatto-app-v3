import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQuestionPage } from './practice-question.page';

describe('PracticeQuestionPage', () => {
  let component: PracticeQuestionPage;
  let fixture: ComponentFixture<PracticeQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
