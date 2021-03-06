import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeePage } from './homee.page';

describe('HomeePage', () => {
  let component: HomeePage;
  let fixture: ComponentFixture<HomeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
