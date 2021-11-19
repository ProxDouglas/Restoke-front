import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from "rxjs";


import {HttpEventType, HttpResponse} from "@angular/common/http";
import {RepresentanteService} from "../../../../../../Service/representante.service";


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  public imagePath!: File;
  imgURL: any;
  public message!: string;

  id!: number;
  inscricao!: Subscription; //Subscription
  representante!: any;

  foto!: File;
  title = 'File-Upload-Save';
  selectedFiles!: FileList;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  constructor(private uploadImageRep: RepresentanteService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        console.log(this.id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }



  changedImage(event: any) {
    this.selectedFile = event.target.files[0];
  }


  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    this.preview(event);
  }

  upload() {
    if (this.selectedFiles && this.selectedFiles[0]) {
      this.foto = this.selectedFiles[0];
      this.uploadImageRep.pushImage(this.foto, this.id)
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
      var files = event.target.files;
      if (files.length === 0) {
        console.log("Deu ruim");
        return;
      }

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

}

