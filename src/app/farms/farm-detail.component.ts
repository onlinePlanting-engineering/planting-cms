import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router';

import { ImgGroupUrl } from '../_models/image';
import { Farm } from '../_models/index';
import { AlertService } from '../_services';
import { ImageService } from '../_services/image.service';
import { FarmCommentsComponent } from './farm-comments.component';
import { FarmsService } from './farms.service';

import { baseUrl } from '../_settings/index';

@Component({
    selector: 'farm-detail',
    templateUrl: 'farm-detail.component.html',
    styleUrls: ['farm-detail.component.scss'],
    providers: [FarmsService, ImageService]
})
export class FarmDetailComponent implements OnInit, OnDestroy{ 
    public farmItem: any;
    private farmId: number;
    private routeSub: any;
    public farmNotice: any;
    public imgGroups: any[] = [];

    constructor(private route: ActivatedRoute, private farmService: FarmsService, 
        private imageService: ImageService, private alertService: AlertService) {
            this.farmId = parseInt( this.route.snapshot.params['id'] );
    }

    ngOnInit(){
        // let farmlist = JSON.parse(localStorage.getItem('farmlist'));
        // this.routeSub = this.route.params.subscribe(params => {
        //     this.farmId = parseInt(params['id']);
        //     this.farmItem = farmlist.find(item => item.id === this.farmId);
        //     this.initialize();
        // });

        this.farmService.getById(this.farmId).subscribe(
                res => {
                    this.farmItem = res.data;
                    this.initialize()
                },
                error => {
                    this.alertService.error(error);
                },
                () => {
                    console.log('Farm Item:', this.farmItem);
                }
            )

    }

    initialize(){
        if(this.farmItem && this.farmItem.notice){
            this.farmService.getNotice(this.farmItem.notice).subscribe(data => this.farmNotice = data);
        }

        if(this.farmItem && this.farmItem.imgs) {
            let img_group_urls: ImgGroupUrl[] = this.farmItem.imgs;
            img_group_urls.forEach(group_url => {
                let url = `${baseUrl}${group_url.url}`;
                this.imageService.getGroupInfo(url).subscribe(
                    data => {
                        this.imgGroups.push(data);
                    },
                    error => {
                        this.alertService.error(error);
                    },
                    () => {
                        console.log('imgGroups: ', this.imgGroups);
                    }
                )
            });
        }
    }

    ngOnDestroy(){
        this.routeSub.unsubscribe();
    }
}