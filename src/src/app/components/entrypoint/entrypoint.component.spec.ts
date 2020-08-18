import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrypointComponent } from './entrypoint.component';

describe('EntrypointComponent', () => {
  let component: EntrypointComponent;
  let fixture: ComponentFixture<EntrypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrypointComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
