import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const gcal_id ='c_2bf8e511fd99db6cdfe7d25067e6b5ecf4440db3cd6a2a5a8a95cdf3df5e2c39@group.calendar.google.com';
const gapi_key = 'AIzaSyBU0O1nxRa5GkPGxgB7f9n1UNv5snpL1aY';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get('https://www.googleapis.com/calendar/v3/calendars/' + gcal_id + '/events?key=' + gapi_key);
  };

}
