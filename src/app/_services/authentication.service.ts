import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as globals from '../_settings/index';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  login(username: string, password: string) {
    var url = globals.baseUrl + '/api/users/login/';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var content = JSON.stringify({username: username, password: password});
    return this.http.post(url, content, {headers: headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let data = response.json();
        if (data && data.token) {
          localStorage.setItem('token', JSON.stringify(data.token));
        }
      }
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }



}
