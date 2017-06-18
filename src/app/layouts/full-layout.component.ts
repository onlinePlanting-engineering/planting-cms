import { Component, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { Observable } from 'rxjs/Rx';
import { error } from 'util';
import { Router, ActivatedRoute } from '@angular/router'

import { UserService, AlertService } from '../_services/index';
import { User, Gender, GENDERS } from '../_models/index';
import { baseUrl } from '../_settings/index'

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  currentUser: User;
  token: string;
  genders: Gender[];
  submmitted = false;
  files: FileList;
  returnedUrl: string;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private element: ElementRef,
    private http: Http,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = JSON.parse(localStorage.getItem('token'));

    this.returnedUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public changeListener(event) {
    // For user profile update onSubmit.
    this.files = event.srcElement.files;

    // Preview uploaded image
    var reader = new FileReader();
    var image = this.element.nativeElement.querySelector('.image');

    reader.onload = function(e) {
      var src = reader.result;
      image.src = src;
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  public onSubmit() {
    this.submmitted = true;
    
    this.userService.update(this.currentUser, this.files)
        .catch(error => Observable.throw(error))
        .subscribe(
          data => {
            // Alert user information update successfully
            this.alertService.success('更新成功！');

            // Refresh currentUser info in localStage
            let returnProfile = data.data;
            let refreshedUser = new User(
              returnProfile.id, returnProfile.owner, returnProfile.nickname,
              returnProfile.gender, returnProfile.addr, returnProfile.img_heading
            );
            localStorage.setItem('currentUser', JSON.stringify(refreshedUser));

            this.router.navigate([this.returnedUrl]);
          },
          error => {
            this.alertService.error(error);
          }
        )
  }

  ngOnInit(): void {
    this.genders = GENDERS;
  }

}
