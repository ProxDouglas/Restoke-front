import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  router!: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  acessarArea(){
    console.log('acessar');
    this.router.navigate(['acessar']);
  }

  cadastrar(){
    console.log('cadastrou');
    this.router.navigate(['cadastro']);
  }

  acessMenu(){
    this.router.navigate(['']);
  }


}
