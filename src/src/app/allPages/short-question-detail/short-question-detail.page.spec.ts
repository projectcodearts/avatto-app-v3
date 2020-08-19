import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortQuestionDetailPage } from './short-question-detail.page';

describe('ShortQuestionDetailPage', () => {
  let component: ShortQuestionDetailPage;
  let fixture: ComponentFixture<ShortQuestionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortQuestionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortQuestionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
