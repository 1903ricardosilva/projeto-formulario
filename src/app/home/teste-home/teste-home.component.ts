import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teste-home',
  templateUrl: './teste-home.component.html',
  styleUrls: ['./teste-home.component.css']
})
export class TesteHomeComponent implements OnInit {

  public nome:String;
 
  constructor() { this.nome = localStorage.getItem('name')}

  ngOnInit(): void {
  }

}
