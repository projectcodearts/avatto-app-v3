import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllsyllabusComponent } from './allsyllabus.component';

describe('AllsyllabusComponent', () => {
  let component: AllsyllabusComponent;
  let fixture: ComponentFixture<AllsyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsyllabusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllsyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
