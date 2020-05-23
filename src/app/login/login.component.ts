import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {
    email: "",
    password:"" 
  }

  constructor(private obj:LoginService, private rota:Router) { }

  ngOnInit(): void {}

  public efetuarAutenticacao(){
   
    this.obj.postLogin(this.user).subscribe(  
      (obj:any) => {
        console.log('efetuarAutenticacao - Usuario Autenticado com Sucesso');
        localStorage.setItem('token', obj.token);
        localStorage.setItem('nome', obj.name);
        this.rota.navigateByUrl('/home');
      },
      error => {
        console.log('efetuarAutenticacao - Autenticacao invalida');
      }
      );
  }


 
}
