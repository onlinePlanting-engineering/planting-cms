import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { baseUrl } from '../_settings/index';
import { UserService } from '../_services/index'
import { User } from '../_models/index';

@Injectable()
export class FarmsService {

  constructor(private http: Http, private userService: UserService) { }

  getAll(user: User){
    let url = `${baseUrl}/api/farms/?username=${user.username}`
    return this.http.get(url, this.userService.jwt())
               .map((response: Response) => response.json());
  }

  getById(id: number){
    return this.http.get(`${baseUrl}/api/farms/${id}/`, this.userService.jwt())
               .map((response: Response) => { response.json()});
  }

}
