import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllEligiblityComponent } from './all-eligiblity.component';

describe('AllEligiblityComponent', () => {
  let component: AllEligiblityComponent;
  let fixture: ComponentFixture<AllEligiblityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEligiblityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllEligiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
