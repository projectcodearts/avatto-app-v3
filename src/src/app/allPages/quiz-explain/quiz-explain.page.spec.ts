import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizExplainPage } from './quiz-explain.page';

describe('QuizExplainPage', () => {
  let component: QuizExplainPage;
  let fixture: ComponentFixture<QuizExplainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizExplainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizExplainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
