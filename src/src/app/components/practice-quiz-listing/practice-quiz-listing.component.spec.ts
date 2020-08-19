import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticeQuizListingComponent } from './practice-quiz-listing.component';

describe('PracticeQuizListingComponent', () => {
  let component: PracticeQuizListingComponent;
  let fixture: ComponentFixture<PracticeQuizListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeQuizListingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeQuizListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
