import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Fornecedor} from "../../Model/fornecedor.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  private usuarioType!: PerfilType;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }



  fazerLogin(fornecedor: Fornecedor){

    if (fornecedor.id != 0 )
    {
      this.usuarioType = PerfilType.DISTRIBUIDOR;

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['fornecedor']);

    }
    // else if (usuario === PerfilType.REPRESENTANTE)
    // {
    //
    //   this.usuarioType = PerfilType.REPRESENTANTE;
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
}
