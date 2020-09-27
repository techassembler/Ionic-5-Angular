import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistiveTouchPage } from './assistive-touch.page';

describe('AssistiveTouchPage', () => {
  let component: AssistiveTouchPage;
  let fixture: ComponentFixture<AssistiveTouchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistiveTouchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistiveTouchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
