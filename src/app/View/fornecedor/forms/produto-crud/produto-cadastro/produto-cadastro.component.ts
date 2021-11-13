import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import { Router} from "@angular/router";


import {AuthService} from "../../../../../Service/auth.service";
import {Fornecedor} from "../../../../../Model/fornecedor.interface";
import {Observable} from "rxjs";
import {Produto} from "../../../../../Model/produto.interface";
import {ProdutoService} from "../../../../../Service/produto.service";



@Component({
  selector: 'app-produto-cadastro-form',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  form: FormGroup ;
  router: Router;
  produtos$: Observable<Produto>;
  image$: Observable<File> ;
  selectedFile!: File;
  submit: boolean = false;
  imgURL: any;
  message!: string;
  private _fornID: number;
  private _prodID!: number;


  constructor(private fb: FormBuilder, private cadastroService: ProdutoService,
              router: Router, authService: AuthService)
  {
    this.router = router;
    this._fornID = (authService.getPerfil() as Fornecedor).id;
    this.form = this.createForm();
    this.produtos$ = new Observable<Produto>();
    this.image$ = new Observable<File>();

  }

  ngOnInit(): void
  {

  }

  get fornID(){ return this._fornID}

  set fornID(value: number) {
    if(value > 0) {
      this._fornID = value;
    }else{
      this._fornID = 0;
    }
  }

  get prodID(): number {return this._prodID;}

  set prodID(value: number) {
    if(value > 0) {
      this._prodID = value;
    }else{
      this._prodID = value;
    }
  }

  createForm(): FormGroup{
    return this.fb.group({
      nome: new FormControl (null,
        [Validators.required, Validators.maxLength(60), Validators.minLength(2)]),
      codigo_barra: new FormControl(null,
        [Validators.required, Validators.maxLength(13), Validators.minLength(13),
        Validators.pattern('[0-9]{13}')]),
      fornecedor: this.fornID,
      categoria: new FormControl(null,
        [Validators.required, Validators.maxLength(50)]),
       descricao: new FormControl(null,
      [ Validators.required, Validators.maxLength(255)]),
    });
  }


  salvar(){
    let msgSuccess = 'Produto cadastrado com sucesso!';
    let msgError = 'Erro ao cadastrar produto, tente novamente!';

    this.produtos$ = this.cadastroService.save(this.form.value as Produto) as Observable<Produto>;

    const localSubscription = this.produtos$.
    subscribe((dados:Produto) => {
        let idProd = dados.id;
        this.upload(idProd);
        alert(msgSuccess);

      },
      (error) => {
      alert("Erro");
        console.log(error);
      });
    setTimeout(() => {
      localSubscription.unsubscribe();
    }, 10000);

  }

  cancelar(){
    // this.cadastroService.list().subscribe(dados => this.produtos = dados);
    // this.submitted = false;
    this.form.reset();
    this.router.navigate(['../fornecedor']);
  }

  onSelect($event: Event) {
    let files: any = ($event.target as HTMLInputElement).files;
    this.selectedFile = files[0];
    // this.form.patchValue({imagens: imagem});
    // this.form.get('imagens')!.updateValueAndValidity();
    this.haveImageOn();
    this.preview($event);
    // this.convertFileBloob(this.form.value.imagens);
  }

  upload(idProd: number) {
    this.image$ = this.cadastroService.pushImage(this.selectedFile, idProd) as Observable<File>;

    this.image$
      .subscribe
      (
        (resposta) =>
        {
          this.router.navigate(['fornecesor']);
          console.log('Upload concluido.')
        },
        (error) => {
          alert('Falha ao enviar imagem');console.log(error);
        }
      );

  }

  preview(event: any) { // transforma arquivo em blob
    if (event.target.files && event.target.files[0]) {
      let files: FileList = event.target.files;
      if (files.length === 0) {
        return;
      }

      let mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
      this.convertFileBloob(files[0]);
    }
  }

  haveImageOn(){
     if(this.selectedFile != null ){this.submit = true}
  }

  convertFileBloob(file: File){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


  voltar() {
    this.cancelar();
  }
}
