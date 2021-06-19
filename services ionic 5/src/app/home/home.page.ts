
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private list: Array<Object>;
  private errorMsg: string;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.callGetService();
  }


  callGetService() {
    let url = 'https://dummyapi.io/data/api/user?limit=10';
    this.http.getMyList(url).subscribe(data => {
      this.list = data.data;
    },
      (error) => {
        console.log(error);
        this.errorMsg = error
      });
  }



}
