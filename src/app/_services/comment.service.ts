import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { baseUrl } from '../_settings/index';
import { UserService } from './user.service';

/**
* This class provides the comments list, retrieve, create and update service with methods.
*/
@Injectable()
export class CommentService {
/**
* Creates a new NameListService with the injected Http.
* @param {Http} http - The injected Http.
* @constructor
*/
    constructor(private http: Http, private userService: UserService) {}
/**
* Returns an Observable for the HTTP GET request for the JSON resource.
* @param {string} type - content type, ex. 'farm'
* @param {number} id - content object id, ex. 1
* @return {string[]} The Observable for the HTTP request.
*/
    get(type, id): Observable<string[]> {
        let url = `${baseUrl}/api/comments/?type=${type}&id=${id}`
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
        error.status ? `error.status - error.statusText` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}