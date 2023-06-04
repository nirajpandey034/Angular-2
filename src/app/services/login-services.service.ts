import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginServicesService {
  constructor(private http: HttpClient) {}
  private _postUrl: string = 'https://reqres.in/api/register';

  saveUserData(data: IUser): Observable<IUser> {
    return this.http
      .post<any>(this._postUrl, data)
      .pipe(catchError<any, any>(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
