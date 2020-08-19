import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizInstructionPage } from './quiz-instruction.page';

describe('QuizInstructionPage', () => {
  let component: QuizInstructionPage;
  let fixture: ComponentFixture<QuizInstructionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizInstructionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizInstructionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
