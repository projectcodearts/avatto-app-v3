import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizPagePage } from './quiz-page.page';

describe('QuizPagePage', () => {
  let component: QuizPagePage;
  let fixture: ComponentFixture<QuizPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
