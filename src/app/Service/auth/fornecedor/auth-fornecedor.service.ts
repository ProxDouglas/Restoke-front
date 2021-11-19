import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";

import {Fornecedor} from "../../../Model/fornecedor.interface";




@Injectable({
  providedIn: 'root'
})
export class AuthFornecedorService {

  private usuarioAutenticado: boolean = false;

  private fornecedor !: Fornecedor;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOninit(){
  }

  fazerLogin(fornecedor: Fornecedor){

    if (fornecedor.id > 0 )
    {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.fornecedor = fornecedor;

      this.router.navigate(['fornecedor']);

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  getPerfil(){
      return this.fornecedor;
  }

  sairPerfil(){

    this.usuarioAutenticado = false;

    this.mostrarMenuEmitter.emit(false);

    //this.fornecedor = {};

    this.router.navigate(['']);
  }

}
