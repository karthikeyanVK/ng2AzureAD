import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatorGuard } from './common/authentication/authenticatorGuard.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'

export const router: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthenticatorGuard]  },
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
