import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonModalPage } from './ion-modal.page';

describe('IonModalPage', () => {
  let component: IonModalPage;
  let fixture: ComponentFixture<IonModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
