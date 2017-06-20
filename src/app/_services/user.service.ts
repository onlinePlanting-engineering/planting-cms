import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';

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

  /**
   * Function for update user profile
   * files: file to img_heading field.
   */ 
  update(user: User, files: FileList) {
    let formData: FormData = new FormData();
    
    if(files && files.length > 0) {
      let file: File = files[0];
      formData.append('img_heading', file, file.name);
    }
    formData.append('nickname', user.nickname);
    formData.append('addr', user.addr);
    formData.append('gender', user.gender);

    let headers = new Headers();
    
    let options = new RequestOptions({headers: headers});
    let url = `${globals.baseUrl}/api/profiles/${user.id}/`
    
    return this.http.put(url, formData, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods
  public jwt() {
    // create authentication header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      let headers = new Headers({'Authorization': 'Token ' + token});
      headers.append('Accept', 'application/json');
      // headers.append('Content-Type', 'multipart/form-data');  
      // Above line must be deleted, or the boundary will not be set automatically and the sever will recieve nothing
      return new RequestOptions({headers: headers});
    }
  }
}
