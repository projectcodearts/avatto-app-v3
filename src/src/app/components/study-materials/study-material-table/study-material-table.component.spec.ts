import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudyMaterialTableComponent } from './study-material-table.component';

describe('StudyMaterialTableComponent', () => {
  let component: StudyMaterialTableComponent;
  let fixture: ComponentFixture<StudyMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyMaterialTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudyMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
