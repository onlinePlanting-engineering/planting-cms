import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {}
  loading = false;

  constructor(
    private router: Router,
    private userServer: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  register(){
    this.loading = true;
    this.userServer.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Register successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      )
  }

}
