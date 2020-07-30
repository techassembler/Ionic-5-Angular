import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {

  private selectedSegment: string ='pizza'
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }

}
