import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReserveEditPage } from './reserve-edit.page';

describe('ReserveEditPage', () => {
  let component: ReserveEditPage;
  let fixture: ComponentFixture<ReserveEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
