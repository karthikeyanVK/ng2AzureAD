import { Component, OnInit } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { AdalService } from "ng2-adal/services/adal.service";

import { AuthHttp } from 'ng2-adal/services/authHttp.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: Http, private authHttp: AuthHttp) {
    this.message = "Validating Authentication....."
  }
  private homeData: string[];
  private message: string;

  ngOnInit() {

    var apiUrl = "http://localhost:25476/api/values";

    return this.authHttp.get(apiUrl)
      .toPromise()
      .then(response => {
        this.message = "Home authenticated and navigated successfully !!!"
        this.homeData = response.json().data as string[];
      }
      )
      .catch(error => { // console.error('An error occurred', error); // for demo purposes only
        this.message = "An error occurred:" + error;
        return Promise.reject(error.message || error);
      });
  }
}
