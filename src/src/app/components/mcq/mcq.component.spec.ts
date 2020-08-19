import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McqComponent } from './mcq.component';

describe('McqComponent', () => {
  let component: McqComponent;
  let fixture: ComponentFixture<McqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
