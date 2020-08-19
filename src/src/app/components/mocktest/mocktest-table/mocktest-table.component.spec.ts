import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MocktestTableComponent } from './mocktest-table.component';

describe('MocktestTableComponent', () => {
  let component: MocktestTableComponent;
  let fixture: ComponentFixture<MocktestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MocktestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
