import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/modeles/iuser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  signUpUser(user: Iuser): Observable<Iuser> {
    return this.httpClient.post<Iuser>(
      `${environment.APIBaseURL}/users`,
      JSON.stringify(user),
      this.http
    );
  }
}
