import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-swipable-segments',
  templateUrl: './swipable-segments.page.html',
  styleUrls: ['./swipable-segments.page.scss'],
})
export class SwipableSegmentsPage implements OnInit {

  private segmentList: Array<string> = ["Friends", 'Enimes']
  private selectedSegment: string;
  private slideList: Array<string> = ["Slide Friends", 'Slide Enimes']


  @ViewChild('slide') slide: IonSlides;

  constructor() {
    this.selectedSegment = this.segmentList[0];
  }

  ngOnInit() {
  }

  segmentChanged(ev: any, index: any) {
    // console.log('Segment changed', ev, index);
  }

  _segmentSelected(item: string, index: number) {
    // console.log(item, index);
    this.slide.slideTo(index)
  }

  _ionSlideDidChange(event: any) {
    // console.log(event)
    this.slide.getActiveIndex().then(index => {
      // console.log(index)
      this.selectedSegment = this.segmentList[index];
    })
  }
}
