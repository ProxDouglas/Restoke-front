import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import { Router} from "@angular/router";
import {ProdutoService} from "../../../../Service/produto.service";
import {Produto} from "../../../../Model/produto.interface";
import {requiredFileType} from "../../../../shered/requiredFileType";


@Component({
  selector: 'app-produto-cadastro-form',
  templateUrl: './produto-cadastro-form.component.html',
  styleUrls: ['./produto-cadastro-form.component.css']
})
export class ProdutoCadastroFormComponent implements OnInit {

  form!: FormGroup ;
  router!: Router;
  idRep!: number;
  selectedFiles!: FileList;
  imgURL: any;
  public message!: string;



  produtos!: Produto[];

  constructor(private fb: FormBuilder, private cadastroService: ProdutoService, router: Router)
  {
    this.router = router;
  }

  ngOnInit(): void
  {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      nome: new FormControl (null, [Validators.required, Validators.maxLength(60), Validators.minLength(2)]),
      codigo_barra: new FormControl(null, [Validators.required, Validators.maxLength(13), Validators.minLength(13),
        Validators.pattern('[0-9]{13}')]),
      descriacao: new FormControl(null, [ Validators.maxLength(255)]),
      imagens: new FormControl(null, {validators: [Validators.required]}),
    });
  }


  cadastrarProduto()
  {
    // let formData: FormData = new FormData();
    // formData = this.form.value

    return this.cadastroService.save(this.form.value as Produto).
    subscribe(() => {
        console.log();
      },
      (error) => {
        console.log(error);
      });
  }

  salvar(){
    //console.warn(this.form.value);
    this.cadastrarProduto();
  }

  cancelar(){
    this.cadastroService.list().subscribe(dados => this.produtos = dados);
  }

  onSelect($event: Event) {
    let files: any = ($event.target as HTMLInputElement).files;
    let imagem = files[0];
    this.form.patchValue({imagens: imagem});
    this.form.get('imagens')!.updateValueAndValidity();

    this.preview($event);
    // this.convertFileBloob(this.form.value.imagens);
  }

  upload() {
    if (this.selectedFiles && this.selectedFiles[0]) {
      this.cadastroService.save(this.form.value as Produto)
        .subscribe
        (
          (resposta) =>
          {
            this.router.navigate(['menu']);
            console.log('Upload concluido.')
          },
          (error) => {
            alert('Falha ao enviar');console.log(error);
          }
        );
    }
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

      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }


  convertFileBloob(file: File){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


}
