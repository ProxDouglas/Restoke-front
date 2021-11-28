import {EventEmitter, Injectable} from '@angular/core';

import {Catalogo} from "../../../../Model/catalogo";



@Injectable({
  providedIn: 'root'
})
export class CatalogoIdNome {

  private catalogoSelecionado: boolean = false;

  private catalogo !: Catalogo;

  autenticado = new EventEmitter<boolean>();

  constructor() { }

  ngOninit(){
  }

  setCatalogo(catalogo: Catalogo){

    this.catalogoSelecionado = true;

    this.autenticado.emit(true);

    this.catalogo = catalogo;

  }

  catalogoSetado() {
    return this.catalogoSelecionado;
  }

  getCatalogo(){
      return this.catalogo;
  }

  resetCatalogo(){

    this.catalogoSelecionado = false;

    this.autenticado.emit(false);

  }


}
