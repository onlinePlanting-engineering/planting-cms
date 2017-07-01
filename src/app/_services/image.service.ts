import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseUrl } from '../_settings/index';
import { UserService } from '../_services/user.service';

/**
* This class provides the NameList service with methods to read names and add names.
*/
@Injectable()
export class ImageService {
/**
* Creates a new NameListService with the injected Http.
* @param {Http} http - The injected Http.
* @constructor
*/
    constructor(private http: Http, private userService: UserService) {}
/**
* Returns an Observable for the HTTP GET request for the image group information.
* @param {number} id - image group id
* @return {any} The Observable for the HTTP request.
*/
    getGroupInfo(url: string): Observable<any> {
        return this.http.get(url, this.userService.jwt())
        .map((res: Response) => res.json())
        //              .do(data => console.log('server data:', data))  // debug
        .catch(this.handleError);
    }

/**
* Handle HTTP error
*/
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}