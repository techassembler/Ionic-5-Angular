import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ion-modal-component',
  templateUrl: './ion-modal-component.component.html',
  styleUrls: ['./ion-modal-component.component.scss'],
})
export class IonModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  @Input() name: string;
  @Input() type: string;

  ngOnInit() { }

  _dismiss() {
    this.modalCtrl.dismiss({
      'fromModal': 'Subscribed TechAssembler'
    });
  }

}
