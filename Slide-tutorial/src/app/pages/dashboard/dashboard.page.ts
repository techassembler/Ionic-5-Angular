import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // variables
  private slideOpts = {
    slidesPerView: 3
  }
  private buttonSlide = {
    slidesPerView: 5
  }
  private verticalSlide = {
    initialSlide: 0,
    direction: 'vertical',
    slidesPerView: 1.5,
  }

  private selectedItem: any;
  @ViewChild('buttonSlideEle', { static: true }) buttonSlideEle: IonSlides;
  constructor() { }

  ngOnInit() {
    this.selectedItem = 6;
    this.buttonSlideEle.slideTo(this.selectedItem - 1)
  }
  onClick(item) {
    console.log(item)
    this.selectedItem = item;
  }

}
