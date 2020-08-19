import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortQuestionDetailsComponent } from './short-question-details.component';

describe('ShortQuestionDetailsComponent', () => {
  let component: ShortQuestionDetailsComponent;
  let fixture: ComponentFixture<ShortQuestionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortQuestionDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortQuestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
