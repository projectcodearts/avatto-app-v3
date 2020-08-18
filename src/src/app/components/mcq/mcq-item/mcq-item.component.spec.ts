import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McqItemComponent } from './mcq-item.component';

describe('McqItemComponent', () => {
  let component: McqItemComponent;
  let fixture: ComponentFixture<McqItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McqItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
