import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllMocktestComponent } from './all-mocktest.component';

describe('AllMocktestComponent', () => {
  let component: AllMocktestComponent;
  let fixture: ComponentFixture<AllMocktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMocktestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllMocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
