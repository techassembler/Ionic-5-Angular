import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime, PickerController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.page.html',
  styleUrls: ['./date-picker.page.scss'],
})
export class DatePickerPage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  customPickerOptions: any;

  minDate: any = new Date().toISOString();
  minTime: any = new Date().toTimeString()

  @ViewChild('datePicker', { static: false }) datePicker: IonDatetime

  ngOnInit() {
    this.minTime = this.datepipe.transform(new Date().toISOString(), 'HH:mm:ss')
    console.log();
    console.log(this.minTime)
    console.log(this.minDate)

  }
  multiColumnOptions: any = [
    [
      'Minified',
      'Responsive',
      'Full Stack',
      'Mobile First',
      'Serverless'
    ],
    [
      'Tomato',
      'Avocado',
      'Onion',
      'Potato',
      'Artichoke'
    ]
  ]
  defaultColumnOptions: any = [
    [
      'Dog',
      'Cat',
      'Bird',
      'Lizard',
      'Chinchilla'
    ]
  ]

  constructor(private datepipe: DatePipe, private pickerController: PickerController) {
    this.customPickerOptions = {
      doneText: "Done",
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ionChange(ev) {
    console.log(ev);
    this.datePicker.open().then(item => {
      console.log(item)
    })
  }

  ionFocus(ev) {
    console.log(ev)
  }


  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions) {
    const picker = await this.pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(value);
          }
        }
      ]
    });

    await picker.present();
  }
  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }
  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

    return options;
  }
}
