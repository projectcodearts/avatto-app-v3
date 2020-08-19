import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResultDetailsComponent } from './search-result-details.component';

describe('SearchResultDetailsComponent', () => {
  let component: SearchResultDetailsComponent;
  let fixture: ComponentFixture<SearchResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
