import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResultPagePage } from './search-result-page.page';

describe('SearchResultPagePage', () => {
  let component: SearchResultPagePage;
  let fixture: ComponentFixture<SearchResultPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
