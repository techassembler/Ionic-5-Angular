import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatePickerPage } from './date-picker.page';

describe('DatePickerPage', () => {
  let component: DatePickerPage;
  let fixture: ComponentFixture<DatePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
