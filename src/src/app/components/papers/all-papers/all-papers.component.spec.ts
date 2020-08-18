import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPapersComponent } from './all-papers.component';

describe('AllPapersComponent', () => {
  let component: AllPapersComponent;
  let fixture: ComponentFixture<AllPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPapersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
