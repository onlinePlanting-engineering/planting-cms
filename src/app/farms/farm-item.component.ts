import { Component, Input } from '@angular/core';
import { Farm } from './farm.model';

@Component({
    selector: 'farm-item',
    templateUrl: 'farm-item.component.html',
    styleUrls: ['farm-item.component.scss']
})
export class FarmItemComponent{
    @Input('item') farmItem: Farm;
}