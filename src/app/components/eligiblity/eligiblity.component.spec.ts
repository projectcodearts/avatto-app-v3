import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EligiblityComponent } from './eligiblity.component';

describe('EligiblityComponent', () => {
  let component: EligiblityComponent;
  let fixture: ComponentFixture<EligiblityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligiblityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EligiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
