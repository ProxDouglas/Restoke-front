import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {RepresentanteService} from "../../../../../Service/representante.service";
import {Representante} from "../../../../../Model/representante.interface";

@Component({
  selector: 'app-representante-cadastro-form',
  templateUrl: './representante-cadastro-form.component.html',
  styleUrls: ['./representante-cadastro-form.component.css']
})
export class RepresentanteCadastroFormComponent implements OnInit {

  form!: FormGroup ;
  router!: Router;
  idRep!: number;

  representantes!: Representante[];

  constructor(private fb: FormBuilder, private cadastroService: RepresentanteService, router: Router)
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

  salvar(){
    //console.warn(this.form.value);
    this.cadastrarFornecedor();
    this.getRep();

  }

  cancelar(){
    // this.cadastroService.list().subscribe(dados => this.representantes = dados);
    this.form.reset();
    this.router.navigate(['../fornecedor']);
  }

  voltar(){
    this.cancelar()
  }

}


// selectFile(event: any){
// }
