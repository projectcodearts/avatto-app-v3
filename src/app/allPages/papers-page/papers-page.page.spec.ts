import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PapersPagePage } from './papers-page.page';

describe('PapersPagePage', () => {
  let component: PapersPagePage;
  let fixture: ComponentFixture<PapersPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PapersPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
