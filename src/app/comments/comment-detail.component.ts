import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router'

import { CommentService, AlertService } from '../_services/index';

import { baseUrl } from '../_settings/index';


@Component({
    selector: 'comment-detail',
    templateUrl: 'comment-detail.component.html',
    styleUrls: ['comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit{ 
    public commentId: number;
    public comment: any;
    private routeSub: any;
    private commentSub: any;
    

    constructor(private commentService: CommentService, private route: ActivatedRoute, private alertService: AlertService ) {
        this.routeSub = this.route.params.subscribe(params => {
            this.commentId = parseInt(params['id']);
        });

    }

    ngOnInit(){
        this.commentSub = this.commentService.getById(this.commentId).subscribe(
            res => {
                let data = res.data;
                this.comment = data;
            },
            error => this.alertService.error(error)
        )
    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
        this.commentSub.unsubscribe();
    }

}