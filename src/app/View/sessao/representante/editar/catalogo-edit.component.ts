import { Component, OnInit } from '@angular/core';

import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {catchError} from "rxjs/operators";
import {environment} from "../../../../../environments/environment";


import {ProdutoService} from "../../../../Service/produto/produto.service";
import {Produto} from "../../../../Model/produto.interface";
import {AuthRepresentanteService} from "../../../../Service/auth/representante/auth-representante.service";
import {Catalogo} from "../../../../Model/catalogo";
import {CardSelecionado} from "./CardSelecionado";
import {CatalogoService} from "../../../../Service/catalogo/catalogo.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-catalogo-edit',
  templateUrl: './catalogo-edit.component.html',
  styleUrls: ['./catalogo-edit.component.css']
})
export class CatalogoEditComponent implements OnInit {

  public imagePathProd = `${environment.imageDefault}`;

  public listID: number[] = [];
  public listDisplay: CardSelecionado[] = [];
  public form: FormGroup;


  public produtos$: Observable<Produto[]>;
  public catalogo$!: Observable<Catalogo>;

  constructor(private service: ProdutoService, private router: Router,
              private route: ActivatedRoute, private authSevice: AuthRepresentanteService,
              private catService: CatalogoService, private fb: FormBuilder
              ) {

    this.produtos$ = this.onRefresh();
    this.form = this.createForm();

  }

  ngOnInit(): void {

    this.produtos$ = this.onRefresh();
    this.createDisplayRule();

  }

  onRefresh(){
    return this.service.list().pipe(
      catchError(error =>{
        console.error(error);
        return [];
      })
    );
  }

  createForm(): FormGroup{
    return this.fb.group({
      nome: new FormControl(null, [Validators.required,
        Validators.maxLength(45), Validators.minLength(2),
      ])
    });
  }

  getIdProduto(idProduto: number) : void{
    let i = 0;
    while (i < this.listID.length) {
      if(idProduto == this.listID[i]){
        this.listID.splice(i, 1);
        return;
      }
      i++;
    }
    this.listID.push(idProduto);
    return;
  }

  verificarIdProduto(idProduto: number) : boolean{
    let i = 0;
    while (i < this.listID.length) {
      if(idProduto == this.listID[i]){
        return true
      }
      i++;
    }
    return false;
  }

  criarCatalogo(){

    let msgSuccess = 'Catalogo cadastrado com sucesso!';
    let msgError = 'Erro ao cadastrar catalogo, tente novamente!';

    if(this.listID.length > 0) {
      let cat = {
        nome: this.form.value.nome,
        idRep: this.authSevice.getPerfil().id,
        produtos: this.listID,
      }

      this.catalogo$ = this.catService.create(cat as Catalogo);

      const localSubscription = this.catalogo$.subscribe((dados: Catalogo) => {
          // let idProd = dados.id;
          // this.upload(idProd);
          alert(msgSuccess);
          this.router.navigate(['representante']);

        },
        (error) => {
          alert(msgError);
          console.log(error);
        });
      setTimeout(() => {
        localSubscription.unsubscribe();
      }, 2000);
    }else{
      alert('Por favor, ecolha os produtos para o novo catalogo!');
    }

  }

  voltar(){
    this.router.navigate(['representante']);
  }

  listToggle: boolean[] = [true,true,true,true,true,true,true,true];
  listStatus = [];

  toggle = false;


  // createRule(){
  //   toggle = true
  //   this.listToggle.push(toggle);
  //   status = 'yesClick';
  //   this.enableDisableRule();
  // }

  enableDisableRule() {
    this.toggle = !this.toggle;
  }

  createDisplayRule(): void{

    for(let i = 0; i<9; i++){
      console.log("foi");
      let ruler: CardSelecionado = new CardSelecionado();
      this.listDisplay.push(ruler);
    }
  }

  trackProduto(index: number, prod: Produto){
    // console.log('oi' + prod + ' : '+ index);
    // if(index + 1 > this.listToggle.length){
    //   this.listToggle.push(true);
    // }
    // let ruler: CardSelecionado = new CardSelecionado();
    // this.listDisplay.push(ruler);
  }

  ruleDisableEnable(index: number){
    let rule: CardSelecionado = this.listDisplay[index];
    rule.enableDisableRule();
  }

  get teste(): boolean{
    return true;
  }

}
