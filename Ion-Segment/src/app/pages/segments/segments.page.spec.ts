import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegmentsPage } from './segments.page';

describe('SegmentsPage', () => {
  let component: SegmentsPage;
  let fixture: ComponentFixture<SegmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
