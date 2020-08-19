import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQuestionComponent } from './practice-question.component';

describe('PracticeQuestionComponent', () => {
  let component: PracticeQuestionComponent;
  let fixture: ComponentFixture<PracticeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQuestionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
