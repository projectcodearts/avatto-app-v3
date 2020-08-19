import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltercategoryComponent } from './filtercategory.component';

describe('FiltercategoryComponent', () => {
  let component: FiltercategoryComponent;
  let fixture: ComponentFixture<FiltercategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercategoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
