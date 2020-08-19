import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PapersComponent } from './papers.component';

describe('PapersComponent', () => {
  let component: PapersComponent;
  let fixture: ComponentFixture<PapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
