import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  callForecastApi(url): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('app-id', '60cdb3d743007b7c053c3ec89');
    return this.http.get(url, { headers: headers })
      .pipe(catchError(res => this.handleError(res)))
  }

  handleError(error: Response | any) {
    let errorFromServer = error.error;
    return throwError(errorFromServer);
  }
}
