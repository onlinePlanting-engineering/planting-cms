import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { StarRatingModule } from 'angular-star-rating';


import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertCompnent } from './_directives/index';
import { AlertService, AuthenticationService, UserService, CommentService } from './_services/index';
import { AuthGuard } from './_guards/index';

// used to create fack backend
import { fakeBackendProvider } from './_helpers/index'
import { MockBackend, MockConnection } from '@angular/http/testing';

// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';

import { CommentReplyComponent } from './comments/comment-reply.component';


import { CommentDetailComponent } from './comments/comment-detail.component';
import { CommentFormComponent } from './comments/comment-form.component';

import { ImageModalModule } from './images/image.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    MomentModule,
    CommonModule,
    StarRatingModule,
    ImageModalModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    AlertCompnent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CommentDetailComponent,
    CommentReplyComponent,
    CommentFormComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  { provide: LOCALE_ID, useValue: "zh-CN" },
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,
  CommentService,


  // providers used to create fake backend
  fakeBackendProvider,
  MockBackend,
  BaseRequestOptions
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
