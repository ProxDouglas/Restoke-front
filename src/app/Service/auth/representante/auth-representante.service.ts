import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Representante} from "../../../Model/representante.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthRepresentanteService {

  private usuarioAutenticado: boolean = false;

  private representante !: Representante;

  autenticado = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOninit(){
  }

  fazerLogin(representante: Representante){

    if (representante.id > 0 )
    {
      this.usuarioAutenticado = true;

      this.autenticado.emit(true);

      this.representante = representante;

      this.router.navigate(['representante']);

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  getPerfil(){
      return this.representante as any;
  }

  sairPerfil(){
    this.usuarioAutenticado = false;

    this.autenticado.emit(false);

    this.representante = {
      id: 0 ,
      nome: '',
      cpf:'',
      telefone:'',
      email:'',
      apresentacao:'',
      fotoPerfil: new File(["sem_imagem"], "sem_imagem.jpg", {
        type: "jpg",
      }),
      fornecedor: 0,

    };

    this.router.navigate(['']);
  }

}
