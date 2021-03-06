import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewLoginPage } from './view-login.page';

describe('ViewLoginPage', () => {
  let component: ViewLoginPage;
  let fixture: ComponentFixture<ViewLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
