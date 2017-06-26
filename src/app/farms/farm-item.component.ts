import { Component, Input, OnInit } from '@angular/core';
import { Farm } from './farm.model';
import { FarmsService } from './farms.service';

@Component({
    selector: 'farm-item',
    templateUrl: 'farm-item.component.html',
    styleUrls: ['farm-item.component.scss']
})
export class FarmItemComponent implements OnInit{
    @Input('item') farmItem: Farm;

    constructor(){
        console.log(this.farmItem);
    }

    ngOnInit(){
        
    }
    
}