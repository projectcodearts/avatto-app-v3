import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McqPagePage } from './mcq-page.page';

describe('McqPagePage', () => {
  let component: McqPagePage;
  let fixture: ComponentFixture<McqPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McqPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
