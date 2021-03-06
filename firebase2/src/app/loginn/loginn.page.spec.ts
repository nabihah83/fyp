import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginnPage } from './loginn.page';

describe('LoginnPage', () => {
  let component: LoginnPage;
  let fixture: ComponentFixture<LoginnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
