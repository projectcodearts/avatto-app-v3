import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EligiblityPagePage } from './eligiblity-page.page';

describe('EligiblityPagePage', () => {
  let component: EligiblityPagePage;
  let fixture: ComponentFixture<EligiblityPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligiblityPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EligiblityPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
