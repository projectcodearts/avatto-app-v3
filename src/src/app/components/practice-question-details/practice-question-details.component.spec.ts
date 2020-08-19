import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQuestionDetailsComponent } from './practice-question-details.component';

describe('PracticeQuestionDetailsComponent', () => {
  let component: PracticeQuestionDetailsComponent;
  let fixture: ComponentFixture<PracticeQuestionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQuestionDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQuestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
