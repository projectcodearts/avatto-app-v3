import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EligiblityPageDetailsPage } from './eligiblity-page-details.page';

describe('EligiblityPageDetailsPage', () => {
  let component: EligiblityPageDetailsPage;
  let fixture: ComponentFixture<EligiblityPageDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligiblityPageDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EligiblityPageDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
