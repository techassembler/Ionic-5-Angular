import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponentComponent } from 'src/app/components/popover-component/popover-component.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {
  }
  async _popOver(ev: any) {
    const popOver = await this.popCtrl.create({
      component: PopoverComponentComponent,
      cssClass: 'my-popover-class',
      event: ev,
    })

    popOver.onDidDismiss().then(data=> console.log(data))

    return await popOver.present()
  }
}
