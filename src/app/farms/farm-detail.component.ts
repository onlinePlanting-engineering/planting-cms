import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router';

import { Farm } from './farm.model';


@Component({
    selector: 'farm-detail',
    templateUrl: 'farm-detail.component.html',
    styleUrls: ['farm-detail.component.scss']
})
export class FarmDetailComponent implements OnInit, OnDestroy{ 
    public farmItem: Farm;
    private farmId: number;
    private routeSub: any;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(){
        let farmlist = JSON.parse(localStorage.getItem('farmlist'));
        this.routeSub = this.route.params.subscribe(params => {
            this.farmId = parseInt(params['id']);
            this.farmItem = farmlist.find(item => item.id === this.farmId);
        })
    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
    }
}