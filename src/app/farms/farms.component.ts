import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'

import { User } from '../_models/index';
import { AlertService } from '../_services/index';
import { FarmsService } from './farms.service';
import { Farm, ImgUrl, CommentUrl, LandUrl } from './farm.model';

import {baseUrl} from '../_settings/index';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss'],
  providers: [FarmsService]
})
export class FarmsComponent implements OnInit {
  farms: Farm[] = [];
  currentUser: User;

  constructor(private farmsService: FarmsService, private alertService: AlertService) { 
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.farmsService.getAll(this.currentUser)
        .catch(error => Observable.throw(error))
        .subscribe(
          data => {
            let farmlist = data.data;
            farmlist.forEach(x => {
              let imgs :ImgUrl[] = [];
              for(let item of x.imgs) {
                imgs.push(new ImgUrl(`${baseUrl}${item.url}`));
              }

              let comments: CommentUrl[] = [];
              for(let item of x.comments) {
                comments.push(new CommentUrl(`${baseUrl}${item.url}`));
              }

              let lands: LandUrl[] = [];
              for(let item of x.lands){
                lands.push(new LandUrl(`${baseUrl}${item.url}`));
              }

              let farm = new Farm(x.id, x.name, x.owner, x.price, x.subject, x.addr, 
              `${baseUrl}${x.home_img_url}`, x.notice, x.content, comments, lands, imgs);
              this.farms.push(farm);

              // Store farm list to localStorage
              if(this.farms.length == farmlist.length) {
                localStorage.setItem('farmlist', JSON.stringify(this.farms));
              }
            });
          }, 
          error => {
            this.alertService.error(error);
          }
        )
  }

}
