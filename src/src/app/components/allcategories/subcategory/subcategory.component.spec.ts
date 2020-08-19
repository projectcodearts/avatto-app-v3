import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubcategoryComponent } from './subcategory.component';

describe('SubcategoryComponent', () => {
  let component: SubcategoryComponent;
  let fixture: ComponentFixture<SubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
