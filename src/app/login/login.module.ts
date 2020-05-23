import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
