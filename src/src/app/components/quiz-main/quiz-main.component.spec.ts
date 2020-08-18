import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizMainComponent } from './quiz-main.component';

describe('QuizMainComponent', () => {
  let component: QuizMainComponent;
  let fixture: ComponentFixture<QuizMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
