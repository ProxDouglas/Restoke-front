import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {CadastroRepresentante} from "../../../../Service/cadastro-representante.service";
import {Observable} from "rxjs";
import {Representante} from "../../../../Model/representante.interface";
import {take, tap} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-representante-cadastro-form',
  templateUrl: './representante-cadastro-form.component.html',
  styleUrls: ['./representante-cadastro-form.component.css']
})
export class RepresentanteCadastroFormComponent implements OnInit {

  form!: FormGroup ;
  private idRep!: number;
  router: Router;
  representante!: Representante;

  representantes: Representante[] = [];
  representantes$!: Observable<Representante>;

  constructor(private fb: FormBuilder, private cadastroService: CadastroRepresentante, router: Router)
  {
    this.router = router;
  }

  ngOnInit(): void {
    this.createForm();

    this.representantes$ = this.cadastroService.list()
      .pipe(
        tap(),
        take(1)
      );


  }

  createForm(){
    this.form = this.fb.group({
      nome: new FormControl (null, [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(14), Validators.minLength(14),
        Validators.pattern( '([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')]),
      telefone: new FormControl(null, [ Validators.maxLength(255)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      apresentacao: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),

    });
  }

  getRep()
  {
    //this.idRep
    this.cadastroService.loadByCPF(this.form.value as Representante).subscribe(
      dados => {
        this.representante = dados;
        //this.idRep = dados.id;
        // console.log(dados);
      },
      (error) => {
        console.log("Agora pega o erro")
        console.log(error);
      });
  }

  cadastrarFornecedor()
  {
    return this.cadastroService.save(this.form.value as Representante).
    subscribe(() => {
        console.log();
      },
      (error) => {
        console.log("Agora pega o erro")
        console.log(error);
      });
  }

  salvar(){
    console.warn(this.form.value);
    this.cadastrarFornecedor();
    this.getRep();
    console.log("id do cara: " + this.representante.id);
    //this.router.navigate(['RepresentanteCadastro/' + this.idRep]);
  }

  cancelar(){
    this.cadastroService.list().subscribe(dados => this.representantes = dados);
  }

}


// selectFile(event: any){
// }
