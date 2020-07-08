import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  private selectAll: boolean = false;

  private form = [
    { val: 'Pepperoni', isChecked: false },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  _ionChange(event) {
    console.log(event)
  }

  _selectAll() {
    this.form.map(item => {
      item.isChecked = !this.selectAll
      return item
    });
  }

  _everyElement(selected) {
    this.form.forEach(item => {
      if (item.val == selected.value)
        item.isChecked = !selected.isChecked
    })

    setTimeout(() => {
      if (this.form.every(item => item.isChecked == true))
        this.selectAll = true;
      else if (this.form.some(item => item.isChecked == false))
        this.selectAll = false;
    }, 100);

  }


}


















