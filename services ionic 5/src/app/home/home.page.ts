import { Component, OnInit } from '@angular/core';
import { HttpService } from "src/app/service/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private list: Array<Object>;
  private error: string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.callForecastApi('https://dummyapi.io/data/api/user?limit=10').subscribe((data) => {
      if (data) {
        console.log(data.data);
        this.list = data.data;
      }
    }, (error) => {
      console.log(error, 'subs')
      this.error = error
    });
  }




}
