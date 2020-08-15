import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabButtonPage } from './fab-button.page';

describe('FabButtonPage', () => {
  let component: FabButtonPage;
  let fixture: ComponentFixture<FabButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
