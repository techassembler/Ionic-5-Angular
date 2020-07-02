import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.page.html',
  styleUrls: ['./ion-menu.page.scss'],
})
export class IonMenuPage implements OnInit {

  constructor(private menu: MenuController) {
    menu.swipeGesture(false);
    // menu.
  }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

 
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
