import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {RepresentanteService} from "../../../../../../Service/representante/representante.service";
import {environment} from "../../../../../../../environments/environment";
import {AuthFornecedorService} from "../../../../../../Service/auth/fornecedor/auth-fornecedor.service";


@Component({
  selector: 'app-representante-cadastro',
  templateUrl: './representante-cadastro.component.html',
  styleUrls: ['./representante-cadastro.component.css']
})
export class RepresentanteCadastroComponent implements OnInit {

  imagePath = `${environment.imagePerfil}`;
  imagemUrl: any = null;
  public message!: string;

  form!: FormGroup ;
  // selectedFiles!: FileList;

  constructor(private fb: FormBuilder, private cadastroService: RepresentanteService,
              private router: Router, private route: ActivatedRoute,
              private authService: AuthFornecedorService)
  {

  }

  ngOnInit(): void {

    this.createForm();

  }


  createForm(){
    this.form = this.fb.group({
      nome: new FormControl (null, [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(14), Validators.minLength(14),
        Validators.pattern( '([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')]),
      numContato: new FormControl(null, [ Validators.maxLength(255)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      apresentacao: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),
      imagem: new FormControl(null, Validators.required),
      fornecedor: this.getFornID(),
    });
  }

  getFornID(): number{
    if(this.authService.usuarioEstaAutenticado()){
      return this.authService.getPerfil().id;
    }
    return 0;
  }


  onSubmit(){

    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = 'Representante criado com sucesso!';
      let msgError = 'Erro ao criar representante, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Representante atualizado com sucesso!';
        msgError = 'Erro ao atualizar representante, tente novamente!';
      }

      this.cadastroService.save(this.form.value).subscribe(() => {
          alert(msgSuccess);
          this.router.navigate(['fornecedor']);
        },
        (error) => {
          alert(msgError);
          console.log(error);
        });
    }
  }

  onSelectFile(event: any) {
    // this.selectedFiles = event.target.files;
    this.preview(event);
  }


  cancelar(){
    // this.cadastroService.list().subscribe(dados => this.representantes = dados);
    this.form.reset();
    this.router.navigate(['../fornecedor']);
  }

  voltar(){
    this.cancelar()
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

  convertFileBloob(file: File){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.setFormImg(reader);

    }
  }

  setFormImg(reader: FileReader){
    if(reader.result != null){
      this.imagemUrl = reader.result;
      console.log(this.imagemUrl.toString());
      this.form.patchValue({imagem: reader.result.toString()});
      // this.form.get('imagens')!.updateValueAndValidity();
    }
  }

}
