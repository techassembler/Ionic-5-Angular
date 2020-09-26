import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolBarPage } from './tool-bar.page';

describe('ToolBarPage', () => {
  let component: ToolBarPage;
  let fixture: ComponentFixture<ToolBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
