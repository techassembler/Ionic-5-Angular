import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sampleData } from "../dummyJSON/dummyJSON";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // variables
  private sampleDataH: Array<Object>;

  constructor(private router: Router) {
    this.sampleDataH = sampleData;
    console.log(this.sampleDataH)
  }

  onClick() {
    this.router.navigate(["/second-page"])
  }

  seletcedItem(event) {
    console.log("Back to:::=> parent ", event)

  }

}
