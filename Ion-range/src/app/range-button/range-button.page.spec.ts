import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangeButtonPage } from './range-button.page';

describe('RangeButtonPage', () => {
  let component: RangeButtonPage;
  let fixture: ComponentFixture<RangeButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangeButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
