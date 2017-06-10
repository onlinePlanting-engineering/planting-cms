import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../_models/index';
import * as globals from '../_settings/index';

@Injectable()
export class UserService {
  constructor(private http: Http){ }

  getUser(){
    return this.http.get(globals.baseUrl + '/api/users/user_info/', this.jwt())
      .map((response: Response) => response.json());
  }

  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/'+user.id, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods
  private jwt() {
    // create authentication header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      let headers = new Headers({'Authorization': 'Token ' + token});
      return new RequestOptions({headers: headers});
    }
  }
}
