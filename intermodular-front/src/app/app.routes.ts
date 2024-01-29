import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', title:'Login',component: LoginComponent},
  {path: 'login', title:'Login', component: LoginComponent}
];
