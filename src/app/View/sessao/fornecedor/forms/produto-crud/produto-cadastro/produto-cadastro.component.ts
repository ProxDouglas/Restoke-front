import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import {ActivatedRoute, Router} from "@angular/router";


import {AuthFornecedorService} from "../../../../../../Service/auth/fornecedor/auth-fornecedor.service";
import {Fornecedor} from "../../../../../../Model/fornecedor.interface";
import {Observable} from "rxjs";
import {Produto} from "../../../../../../Model/produto.interface";
import {ProdutoService} from "../../../../../../Service/produto/produto.service";
import {environment} from "../../../../../../../environments/environment";




@Component({
  selector: 'app-produto-cadastro-form',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
  imagePath = `${environment.imageDefault}`;

  form: FormGroup ;
  produtos$: Observable<Fornecedor>;
  image$: Observable<File> ;
  selectedFile!: File;
  submit: boolean = false;
  imgURL: any;
  message!: string;
  private _fornID: number;
  private _prodID!: number;


  constructor(private fb: FormBuilder, private service: ProdutoService,
              private router: Router, private authService: AuthFornecedorService,
              private route: ActivatedRoute)
  {

    this._fornID = (authService.getPerfil() as Fornecedor).id;
    this.form = this.createForm();
    this.produtos$ = new Observable<Fornecedor>();
    this.image$ = new Observable<File>();

  }

  ngOnInit(): void
  {
    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadByID(id as number)),
    //   // switchMap(cursos => obterAulas)
    // )
    // .subscribe(curso =>console.log(curso));

    const produto = this.route.snapshot.data['produto'];
    if(produto.id > 0){
      this.formUpdate(produto);
    }
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
      id: 0,
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

  formUpdate(produto: Produto){
    this.form.patchValue({id: produto.id});
    this.form.patchValue({nome: produto.nome});
    this.form.patchValue({codigo_barra: produto.codigo_barra});
    this.form.patchValue({fornecedor: produto.fornecedor});
    this.form.patchValue({categoria: produto.categoria});
    this.form.patchValue({descricao: produto.descricao});
  }


  salvar(){
    let msgSuccess = 'Produto cadastrado com sucesso!';
    let msgError = 'Erro ao cadastrar produto, tente novamente!';

    if (this.form.value.id > 0) {
      msgSuccess = 'Produto atualizado com sucesso!';
      msgError = 'Erro ao atualizar produto, tente novamente!';
    }

    this.produtos$ = this.service.save(this.form.value as Produto) as Observable<Fornecedor>;

    const localSubscription = this.produtos$.
    subscribe((dados:Fornecedor) => {
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
    this.router.navigate(['/fornecedor/produtos']);
  }

  voltar() {
    this.cancelar();
  }

  onSelect($event: Event) {
    let files: any = ($event.target as HTMLInputElement).files;
    let file = files[0];
    let formData = new FormData();
    formData.append("imagem", file);

    this.form.patchValue({imagem: formData});
    // console.log(this.form.value.imagem.toString());
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

}
