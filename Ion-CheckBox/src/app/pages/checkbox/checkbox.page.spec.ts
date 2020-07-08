import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckboxPage } from './checkbox.page';

describe('CheckboxPage', () => {
  let component: CheckboxPage;
  let fixture: ComponentFixture<CheckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
