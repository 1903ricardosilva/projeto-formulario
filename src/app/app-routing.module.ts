import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule),  canActivate: [AuthGuard] },
  {path:"", redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
