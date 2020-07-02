import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private sideMenuList: Array<object>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.sideMenuList = [
      {
        title: 'Inbox',
        icon: 'mail'
      },
      {
        title: 'Outbox',
        icon: 'paper-plane'
      }, {
        title: 'Favorites',
        icon: 'heart'
      }, {
        title: 'Archive',
        icon: 'archive'
      }, {
        title: 'Trash',
        icon: 'trash'
      }, {
        title: 'Spam',
        icon: 'warning'
      }

    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionDidOpen(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log("opened")
    })
  }

  ionDidClose(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log("Closed")
    })
  }

  openEnd(item: string) {
    console.log(item + '-->  is clicked')
    this.menu.close();
  }

}
