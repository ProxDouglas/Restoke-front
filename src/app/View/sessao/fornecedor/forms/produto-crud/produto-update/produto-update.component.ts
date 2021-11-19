import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import {ActivatedRoute, ParamMap, Router} from "@angular/router";


import {AuthFornecedorService} from "../../../../../../Service/auth/fornecedor/auth-fornecedor.service";
import {Fornecedor} from "../../../../../../Model/fornecedor.interface";
import {Observable, Subscription} from "rxjs";
import {Produto} from "../../../../../../Model/produto.interface";
import {ProdutoService} from "../../../../../../Service/produto.service";
import {switchMap} from "rxjs/operators";



@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  form: FormGroup ;
  produto$!: Observable<Produto>;
  produtos$: Observable<Produto>;
  image$: Observable<File> ;
  selectedFile!: File;
  submit: boolean = false;
  imgURL: any;
  message!: string;
  private id: number = 0;
  private produto!:Produto;
  private _fornID: number;
  private _prodID!: number;
  private getProdSub!: Subscription;


  constructor(private fb: FormBuilder,
              private service: ProdutoService,
              private router: Router,
              private authService: AuthFornecedorService,
              private activetRoute: ActivatedRoute)
  {
    this._fornID = (authService.getPerfil() as Fornecedor).id;
    this.produtos$ = service.loadByID(this.id);
    this.form = this.createForm(this.produtos$);
    this.image$ = new Observable<File>();

  }

  ngOnInit(): void
  {

  }

  getParamID(){
    this.produto$ = this.activetRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.loadByID(+params.get('id')!))
    );


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

  createForm(produto$: Observable<Produto>): FormGroup{

    this.getProdSub = produto$.subscribe(data => this.produto = data);

    return this.fb.group({
      nome: new FormControl (this.produto.nome ,
        [Validators.required, Validators.maxLength(60), Validators.minLength(2)]),
      codigo_barra: new FormControl(this.produto.codigo_barra,
        [Validators.required, Validators.maxLength(13), Validators.minLength(13),
        Validators.pattern('[0-9]{13}')]),
      fornecedor: this.fornID,
      categoria: new FormControl(this.produto.categoria,
        [Validators.required, Validators.maxLength(50)]),
       descricao: new FormControl(this.produto.descricao,
      [ Validators.required, Validators.maxLength(255)]),
    });
  }


  salvar(){
    let msgSuccess = 'Produto cadastrado com sucesso!';
    let msgError = 'Erro ao cadastrar produto, tente novamente!';

    this.produtos$ = this.service.save(this.form.value as Produto) as Observable<Produto>;

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
    // this.service.list().subscribe(dados => this.produtos = dados);
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
    this.image$ = this.service.pushImage(this.selectedFile, idProd) as Observable<File>;

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
