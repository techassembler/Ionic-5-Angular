import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-component',
  templateUrl: './popover-component.component.html',
  styleUrls: ['./popover-component.component.scss'],
})
export class PopoverComponentComponent implements OnInit {

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() { }

  dismissPopover(item: string) {
    this.popCtrl.dismiss({
      'fromPop': item + ' Subscribed'
    });
  }

}
