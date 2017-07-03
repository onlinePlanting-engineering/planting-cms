import { Component, Input } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { FarmsService } from './farms.service';
import { AlertService } from '../_services/index';


@Component({
    selector: 'infor-form',
    templateUrl: 'info-form.component.html',
    styleUrls: ['info-form.component.scss'],
    providers: [ FarmsService ]
})
export class InfoFormComponent  { 
    @Input('farmItem') farm: any;
    @Input('farmNotice') farmNotice: any;
    @Input('farmContent') farmContent: any;

    constructor(private farmService: FarmsService, private alertService: AlertService) {
        
    }

    preview(){

    }

    save(){
        /**
         * Update farm information, before send http method, 'notice' and 'content' fields
         * need be repaced with farmNotice and farmContent.
         */
        let data = this.farm;
        data['notice'] = this.farmNotice;
        data['content'] = this.farmContent;
        this.farmService.update(this.farm.id, data).subscribe(
            data => {
                console.log('updated farm: ', data);
            },
            error => {
                this.alertService.error(error);
            },
            () => {
                window.location.reload();
            }
        )
    }

    cancel(){
        
    }
}