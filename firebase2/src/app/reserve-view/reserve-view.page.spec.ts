import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReserveViewPage } from './reserve-view.page';

describe('ReserveViewPage', () => {
  let component: ReserveViewPage;
  let fixture: ComponentFixture<ReserveViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
