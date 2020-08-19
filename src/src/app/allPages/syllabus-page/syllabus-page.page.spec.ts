import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyllabusPagePage } from './syllabus-page.page';

describe('SyllabusPagePage', () => {
  let component: SyllabusPagePage;
  let fixture: ComponentFixture<SyllabusPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
