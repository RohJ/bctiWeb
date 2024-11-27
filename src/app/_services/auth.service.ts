import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api.vimeo.com/oauth/authorize/client';

const AUTH_GAPI = 'AIzaSyBU0O1nxRa5GkPGxgB7f9n1UNv5snpL1aY';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept' : 'application/vnd.vimeo.*+json;version=3.4',
    'Content-Type': 'application/json',

  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.post(AUTH_API, {
      "grant_type": "client_credentials",
      "scope": "public"
    }, httpOptions);
  };

  gcaltoken(): Observable<any> {
    return this.http.post(AUTH_GAPI, {
      "grant_type": "client_credentials",
      "scope": "public"
    }, httpOptions);
  };

}
