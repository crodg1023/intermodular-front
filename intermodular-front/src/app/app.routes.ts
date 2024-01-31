import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';

export const routes: Routes = [
  {path: '', title:'Gestión FCT',component: LandingPageComponentComponent},
  {path: 'login', title:'Login', component: LoginComponent}
];
