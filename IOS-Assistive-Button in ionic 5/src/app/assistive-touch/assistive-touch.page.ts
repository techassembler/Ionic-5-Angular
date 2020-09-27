import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-assistive-touch',
  templateUrl: './assistive-touch.page.html',
  styleUrls: ['./assistive-touch.page.scss'],
})
export class AssistiveTouchPage {

  counter = 0;

  swipeGesture: Gesture;
  @ViewChild('contentElement', { static: true, read: ElementRef }) contentElement: ElementRef;

  private totalHeight: any = 100;
  private screenHeight: any = document.documentElement.clientHeight;
  private totalWidth: any = 100;
  private screenWidth: any = document.documentElement.clientWidth;


  constructor(private gestureController: GestureController, private ref: ChangeDetectorRef) { }

  ionViewDidEnter() {
    this.swipeGesture = this.gestureController.create({
      el: this.contentElement.nativeElement,
      direction: 'y',
      gestureName: 'swipe',
      // onStart: (detail) => this.swipeStart(detail),
      onEnd: (detail) => this.onSwipeEnd(detail),
      onMove: (detail) => { this.onMove(detail); }
    });
    this.swipeGesture.enable();


  }

  swipeStart(detail) {
    console.log(detail)

  }
  private onSwipeEnd(detail) {

    let perWidth = ((detail.currentX * 100) / this.screenWidth);
    var d = document.getElementById('yourDivId'); d.style.position = "fixed";
    console.log(perWidth)
    d.style.zIndex = '9999';
    d.style.transition = ' .2s all ease'
    if (perWidth > 50) {

      // d.style.left = '90%';
      d.style.left = '86%';

      // d.style.right = '10px';
      d.style.right = '15px';

      // console.log("end", detail);

    } else {
      // d.style.left = '10px';
      d.style.left = '10px';
    }

    this.ref.detectChanges(); // Runs the change detection

  }
  private onMove(detail) {
    console.log(detail)
    let perHeight = ((detail.currentY * 100) / this.screenHeight);
    if (perHeight > 5 && perHeight <= 95) {
      var d = document.getElementById('yourDivId'); d.style.position = "fixed";
      d.style.transition = 'none'
      d.style.left = detail.currentX + 'px';
      d.style.top = perHeight + '%';
      d.style.zIndex = '9999'
    }
  }

}

