import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {}
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alterService: AlertService,
    private userService: UserService,
    private http: Http
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.userService.getUser().subscribe(
            resp => {
              if( resp && resp.data && resp.data.profile){
                let currentUser = resp.data.profile;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                this.router.navigate([this.returnUrl]);
              }
            }
          );
        },
        error => {
          this.alterService.error(error);
          this.loading = false;
        }
      );
  }

}
