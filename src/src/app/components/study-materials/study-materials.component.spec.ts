import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudyMaterialsComponent } from './study-materials.component';

describe('StudyMaterialsComponent', () => {
  let component: StudyMaterialsComponent;
  let fixture: ComponentFixture<StudyMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyMaterialsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
