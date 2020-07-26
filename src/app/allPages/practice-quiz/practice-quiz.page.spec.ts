import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQuizPage } from './practice-quiz.page';

describe('PracticeQuizPage', () => {
  let component: PracticeQuizPage;
  let fixture: ComponentFixture<PracticeQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQuizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
