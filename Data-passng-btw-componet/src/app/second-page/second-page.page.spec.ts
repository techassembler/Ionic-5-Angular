import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondPagePage } from './second-page.page';

describe('SecondPagePage', () => {
  let component: SecondPagePage;
  let fixture: ComponentFixture<SecondPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
