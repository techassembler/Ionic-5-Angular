import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonMenuPage } from './ion-menu.page';

describe('IonMenuPage', () => {
  let component: IonMenuPage;
  let fixture: ComponentFixture<IonMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
