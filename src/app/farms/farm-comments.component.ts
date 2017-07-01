
import { Component, Input, OnInit } from '@angular/core';
import { error } from 'util';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Farm } from '../_models/index';
import { CommentService, AlertService } from '../_services/index';

@Component({
    selector: 'farm-comment-list',
    templateUrl: 'farm-comments.component.html',
    styleUrls: ['farm-comments.component.scss'],
    providers: [ CommentService ],
})
export class FarmCommentsComponent implements OnInit { 
    @Input('farm') farm: Farm;
    commentList: any[] = [];

    constructor(private commentService: CommentService, private alertService: AlertService ) {
    }

    ngOnInit(){
        this.commentService.get('farm', this.farm.id)
            .catch(error => Observable.throw(error))
            .subscribe(
                res => {
                    this.commentList = res.data;
                    console.log('comment-list', this.commentList);
                },
                
                error => this.alertService.error(error)
            )
       
    }
}