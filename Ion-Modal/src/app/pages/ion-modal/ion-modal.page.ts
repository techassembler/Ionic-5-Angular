import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { IonModalComponent } from 'src/app/components/ion-modal-component/ion-modal-component.component';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage implements OnInit {

  fromModalData: string;

  constructor(private modalCtrl: ModalController, private routerOutLet: IonRouterOutlet) { }

  ngOnInit() {
  }

  async _openModal() {
    const modal = await this.modalCtrl.create({
      component: IonModalComponent,
      componentProps: {
        'name': 'TechAssembler',
        'type': 'Subscribe'
      },
      cssClass: 'my-modal-componet-css',
      swipeToClose: true,
      presentingElement: this.routerOutLet.nativeEl

    });

    modal.onWillDismiss().then((data: any) => {
      if (data.data)
        this.fromModalData = data.data.fromModal
      console.log(data)
    });
    modal.onDidDismiss().then((data: any) => {
      if (data.data)
        this.fromModalData = data.data.fromModal
      console.log(data)
    });
    return await modal.present();


  }

}
