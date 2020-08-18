import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MocktestPagePage } from './mocktest-page.page';

describe('MocktestPagePage', () => {
  let component: MocktestPagePage;
  let fixture: ComponentFixture<MocktestPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MocktestPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
