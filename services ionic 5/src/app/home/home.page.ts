import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private list: Array<Object>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callForecastApi('https://dummyapi.io/data/api/user?limit=10').subscribe((data) => {
      if (data) {
        console.log(data.data);
        this.list = data.data;
      }
    }, (error) => {
      console.log(error, 'subs')
    });
  }



  callForecastApi(url): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('app-id', '60cdb3d74007b7c053c3ec89');
    return this.http.get(url, { headers: headers })
      .pipe(catchError(res => this.handleError(res)))
  }

  handleError(error: Response | any) {
    let errorFromServer = error.error.data.message;
    return throwError(errorFromServer);
  }

}
