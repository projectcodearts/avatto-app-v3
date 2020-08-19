import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResultDetailsPagePage } from './search-result-details-page.page';

describe('SearchResultDetailsPagePage', () => {
  let component: SearchResultDetailsPagePage;
  let fixture: ComponentFixture<SearchResultDetailsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultDetailsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultDetailsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
