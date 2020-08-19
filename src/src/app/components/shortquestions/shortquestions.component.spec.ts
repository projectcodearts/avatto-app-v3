import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortquestionsComponent } from './shortquestions.component';

describe('ShortquestionsComponent', () => {
  let component: ShortquestionsComponent;
  let fixture: ComponentFixture<ShortquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortquestionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
