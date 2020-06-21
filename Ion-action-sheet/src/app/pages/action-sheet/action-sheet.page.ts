import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
selector: 'app-action-sheet',
templateUrl: './action-sheet.page.html',
styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {


constructor(public actionSheetController: ActionSheetController) { }

ngOnInit() {
}

async _presentActionSheet() {
const actionSheet = await this.actionSheetController.create({
  header: 'Albums',
  // subHeader: 'Photos',
  // cssClass: 'my-custom-class',
  // mode: 'ios',
  // animated: false,
  // backdropDismiss: true,
  // translucent: true,
  buttons: [
    {
      text: 'Delete',
      icon: 'trash',
      role: 'destructive',
      handler: () => {
        console.log('Delete clicked');
      }
    },
    {
      text: 'Forward',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    },
    {
      text: 'Camera',
      // role: 'selected',
      icon: 'camera',
      handler: () => {
        console.log('Play clicked');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close',
      handler: () => {
        console.log('Cancel clicked');
        actionSheet.dismiss()
      }
    }
  ]
});
await actionSheet.present();
await actionSheet.onDidDismiss().then(item => {
  // console.log('onDidDismiss')
})

await actionSheet.dismiss().then(item => {
  // console.log('dismiss')
})

}

}
