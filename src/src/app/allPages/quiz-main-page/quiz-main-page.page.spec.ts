import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizMainPagePage } from './quiz-main-page.page';

describe('QuizMainPagePage', () => {
  let component: QuizMainPagePage;
  let fixture: ComponentFixture<QuizMainPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMainPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
