import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterItemComponent } from './filter-item.component';

describe('FilterItemComponent', () => {
  let component: FilterItemComponent;
  let fixture: ComponentFixture<FilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
