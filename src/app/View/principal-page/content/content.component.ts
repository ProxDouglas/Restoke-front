import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


import {RepresentanteService} from "../../../Service/representante/representante.service";
import {Representante} from "../../../Model/representante.interface";
import {catchError} from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // message = new FormControl();
  valorAtual: String = '';
  valorSalvo: String = '';
  valorEntrada: String = '';

  imagePath = `${environment.imagePerfil}`;

  representantes$: Observable<Representante[]>;

  constructor(private service: RepresentanteService,
              private router: Router,
              private route: ActivatedRoute) {

    this.representantes$ = this.onRefresh();
  }

  ngOnInit(): void {

    this.representantes$ = this.onRefresh();

  }

  onRefresh(){
    return this.service.list().pipe(
      catchError(error =>{
        console.error(error);
        return [];
      })
    );
  }

  enterEvent(valor: String){
    this.valorEntrada = valor;
  }

  salvarValor(valor: String){
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }


  onRepresentante(id: number) {
    console.log('listar');
    this.router.navigate(['listCatalogo', id], {relativeTo: this.route});
  }

  haveImagem(imagem: string) {
    return imagem != null && imagem != '';
  }
}
