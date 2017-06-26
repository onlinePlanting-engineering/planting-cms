import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router';

import { Farm } from './farm.model';
import { FarmsService } from './farms.service';

import { FarmCommentsComponent } from './farm-comments.component';


@Component({
    selector: 'farm-detail',
    templateUrl: 'farm-detail.component.html',
    styleUrls: ['farm-detail.component.scss'],
    providers: [FarmsService]
})
export class FarmDetailComponent implements OnInit, OnDestroy{ 
    public farmItem: Farm;
    private farmId: number;
    private routeSub: any;
    public farmNotice: any;
    constructor(private route: ActivatedRoute, private farmService: FarmsService) {
    }

    ngOnInit(){
        let farmlist = JSON.parse(localStorage.getItem('farmlist'));
        this.routeSub = this.route.params.subscribe(params => {
            this.farmId = parseInt(params['id']);
            this.farmItem = farmlist.find(item => item.id === this.farmId);
        });

        if(this.farmItem && this.farmItem.notice){
            this.farmService.getNotice(this.farmItem.notice).subscribe(data => this.farmNotice = data);
        }
    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
    }
}