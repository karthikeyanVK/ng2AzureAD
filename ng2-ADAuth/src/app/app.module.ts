import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AdalService } from "ng2-adal/services/adal.service";
import { AuthConfigService } from './common/authentication/auth-config.service'
import { AuthenticatorGuard } from './common/authentication/authenticatorGuard.guard';
import { AuthHttp } from 'ng2-adal/services/authHttp.service'
import { AppComponent } from './app.component';
import {AppRoutes} from './app.router';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdalService, AuthConfigService,AuthenticatorGuard,AuthHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
