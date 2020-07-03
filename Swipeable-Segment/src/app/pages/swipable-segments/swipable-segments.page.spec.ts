import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwipableSegmentsPage } from './swipable-segments.page';

describe('SwipableSegmentsPage', () => {
  let component: SwipableSegmentsPage;
  let fixture: ComponentFixture<SwipableSegmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipableSegmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwipableSegmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
