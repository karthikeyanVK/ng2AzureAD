import { Component } from '@angular/core';
import { AuthConfigService } from './common/authentication/auth-config.service'
import {AdalService} from "ng2-adal/services/adal.service";
import { AuthHttp } from 'ng2-adal/services/authHttp.service'
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private appData: string;
    
   constructor(
    private adalService: AdalService,
    private authConfigService: AuthConfigService,
    private http: Http
  ) {
    this.adalService.init(this.authConfigService.adalConfig);
  }
  ngOnInit() {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }
  
  private logOut() {
       this.adalService.logOut();
  }
  title = 'app works! Click Home to Authenticate';
}
