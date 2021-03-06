import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterrPage } from './registerr.page';

describe('RegisterrPage', () => {
  let component: RegisterrPage;
  let fixture: ComponentFixture<RegisterrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
