import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {CadastroRepresentante} from "../../../../Service/cadastro-representante.service";
import {Observable} from "rxjs";
import {Representante} from "../../../../Model/representante.interface";
import {take, tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-representante-cadastro-form',
  templateUrl: './representante-cadastro-form.component.html',
  styleUrls: ['./representante-cadastro-form.component.css']
})
export class RepresentanteCadastroFormComponent implements OnInit {

  form!: FormGroup ;
  router!: Router;
  representante!: Representante;
  idRep!: number;

  representantes: Representante[] = [];
  representantes$!: Observable<Representante>;

  constructor(private fb: FormBuilder, private cadastroService: CadastroRepresentante, router: Router)
  {
    this.router = router;
  }

  ngOnInit(): void {
    this.createForm();


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
    this.cadastroService.loadByCPF((this.form.value as Representante).cpf).subscribe(
      (dados: any) => {
        let idRep = <number>dados[0].id;
        this.router.navigate(['fornecedor/representante/' + idRep]);
      },
      (error) => {
        console.log(error);
      });

    console.log("idRep: " + this.idRep);
  }

  cadastrarFornecedor()
  {
    return this.cadastroService.save(this.form.value as Representante).
    subscribe(() => {
        console.log();
      },
      (error) => {
        console.log(error);
      });
  }

  salvar(){
    //console.warn(this.form.value);
    this.cadastrarFornecedor();
    this.getRep();

  }

  cancelar(){
    this.cadastroService.list().subscribe(dados => this.representantes = dados);
  }

}


// selectFile(event: any){
// }
