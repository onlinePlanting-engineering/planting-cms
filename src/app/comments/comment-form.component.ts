import { Component, Input } from '@angular/core';
import { cursorTo } from 'readline';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CommentService, AlertService } from '../_services/index';

import { baseUrl } from '../_settings/index';

@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent  { 
    @Input('currentComment') comment: any;
    public count: number = 200;
    public val: string = '';
    public baseUrl: string = baseUrl;

    constructor(private commentService: CommentService, private alertService: AlertService) {
        
    }

    onSubmit(){
        let body = { 'content': this.val };
        this.commentService.create(body, this.comment.type, this.comment.object_id, this.comment.id)
            .subscribe(data => {
                console.log(data);
                this.val = '';
                window.location.reload();
            }, error => {
                this.alertService.error(error);
            })
    }
}