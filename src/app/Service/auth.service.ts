import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";

import {PerfilTIpo} from "../View/login/PerfilTIpo";
import {Fornecedor} from "../Model/fornecedor.interface";
import {Representante} from "../Model/representante.interface";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  private usuarioType!: number;

  private dados !: Object;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOninit(){
  }

  fazerLogin(data: any){

    if ((data as any).id != 0 )
    {
      this.usuarioType = PerfilTIpo.DISTRIBUIDOR;

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.dados = data;

      this.router.navigate(['fornecedor']);

    }
    // else if (usuario === PerfilTIpo.REPRESENTANTE)
    // {
    //
    //   this.usuarioType = PerfilTIpo.REPRESENTANTE;
    //
    //   this.usuarioAutenticado = true;
    //
    //   this.mostrarMenuEmitter.emit(true);
    //
    //   this.router.navigate(['/']);
    // }
    // else {
    //   this.usuarioAutenticado = false;
    //
    //   this.mostrarMenuEmitter.emit(false);
    // }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  getPerfil(){
    if(this.usuarioType == PerfilTIpo.DISTRIBUIDOR)
    {
      return this.dados as any;
    }
    else if(this.usuarioType == PerfilTIpo.REPRESENTANTE)
    {
      return this.dados as any;
    }
  }

  sairPerfil(){
    this.usuarioType = PerfilTIpo.DISTRIBUIDOR;

    this.usuarioAutenticado = false;

    this.mostrarMenuEmitter.emit(false);

    this.dados = {};

    this.router.navigate(['']);
  }

}
