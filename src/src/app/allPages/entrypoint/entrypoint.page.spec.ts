import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrypointPage } from './entrypoint.page';

describe('EntrypointPage', () => {
  let component: EntrypointPage;
  let fixture: ComponentFixture<EntrypointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrypointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrypointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
