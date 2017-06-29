import { Component, Input } from '@angular/core';
import { cursorTo } from 'readline';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CommentService, AlertService } from '../_services/index';

import { baseUrl } from '../_settings/index';

import { Animations } from './comment.animation';

@Component({
    selector: 'comment-reply',
    templateUrl: './comment-reply.component.html',
    styleUrls: ['./comment-detail.component.scss', './comment-reply.component.scss'],
    animations: [ Animations.slideInOut ]
})
export class CommentReplyComponent  { 
    @Input('currentComment') comment: any;
    public baseUrl: string = baseUrl;
    private collapsed: boolean;

    constructor() {
        this.collapsed = true;
    }

     public isCollapsed(): boolean {
        return this.collapsed;
    }

    public setCollapsed(): void {
        this.collapsed = true;
    }

    public toggleBtn(): void {
        this.collapsed = !this.collapsed;
        console.log('collapsed: ', this.collapsed);
    }

}