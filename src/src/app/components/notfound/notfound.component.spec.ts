import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotfoundComponent } from './notfound.component';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
