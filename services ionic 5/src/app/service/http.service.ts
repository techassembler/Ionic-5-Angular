import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMyList(url): Observable<any> {
    let header = new HttpHeaders();
    header = header.set('app-id', '1160cdb3d74007b7c053c3ec89');
    return this.http.get(url, { headers: header }).pipe(catchError(err => this.handleError(err)))

  }

  handleError(err) {
    let errorFromServer = err.error;
    return throwError(errorFromServer)
  }

  // anotherFubt() {

  // }


}
