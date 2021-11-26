import { Component, OnInit } from '@angular/core';
import {RepresentanteService} from "../../../../../../Service/representante/representante.service";
import {AuthFornecedorService} from "../../../../../../Service/auth/fornecedor/auth-fornecedor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of, pipe, Subscription} from "rxjs";
import {Representante} from "../../../../../../Model/representante.interface";
import {catchError, map, take} from "rxjs/operators";
import {FornecedorService} from "../../../../../../Service/fornecedor/fornecedor.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../../../../environments/environment";
import {makeBindingParser} from "@angular/compiler";
import {Fornecedor} from "../../../../../../Model/fornecedor.interface";
import {Associar} from "../../../../../../Model/associar.interface";



@Component({
  selector: 'app-associacao',
  templateUrl: './associacao.component.html',
  styleUrls: ['./associacao.component.css']
})
export class AssociacaoComponent implements OnInit {

  imagePath = `${environment.imagePerfil}`;

  catalogo: Observable<Associar>;
  representantes$: Observable<Representante[]>;
  representante!: Representante;
  form: FormGroup;

  haveRepresentante: boolean = false;

  constructor(private service: RepresentanteService, private authService: AuthFornecedorService,
              private router: Router, private route: ActivatedRoute,
              private fornService: FornecedorService, private fb: FormBuilder) {

    // this.representante$ = this.service.list()
    //   .pipe(
    //     catchError (error =>{
    //     return of([]);
    //     })
    //   );

    this.catalogo = new Observable<Associar>();
    this.representantes$ = new Observable<Representante[]>();



    this.form = this.fb.group({
      cpf: new FormControl('', [Validators.required,
        Validators.maxLength(14), Validators.minLength(14),
        Validators.pattern('([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')])
    });
  }

  ngOnInit(): void {

  }

  findByCPF(listRep: Representante[], representante: Representante): any{
    let i = 0, rep = null;
    while(i < listRep.length){
      if(listRep[i].cpf == representante.cpf){
        rep = listRep[i];
        return rep;
      }
    }
    return rep;
  }

  setRep(){
    if(this.form.valid) {
      // this.representante = this.findByCPF(this.listRep, this.form.value);
      this.representantes$ = this.service.list().pipe();
    }
  }

  confirmRep(idRep: number){

    let msgSuccess = 'Representante associado com sucesso!';
    let msgError = 'Erro ao associar representante, tente novamente!';

    const idForn = this.authService.getPerfil().id;
    this.catalogo = this.fornService.associar(idRep, idForn).pipe();

    const localSubscription = this.catalogo.subscribe(
      dados=>{
        alert(msgSuccess);
      },
      (error) => {
        alert(msgError);
        console.log(error);
      });
    setTimeout(() => {
      localSubscription.unsubscribe();
    }, 2000);
  }

  onCancel(){
    this.form.reset();
  }

  voltar(){
    this.router.navigate(['forncedor'], {relativeTo: this.route});
  }



}
