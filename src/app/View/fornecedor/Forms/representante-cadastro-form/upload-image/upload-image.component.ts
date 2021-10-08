import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from "rxjs";


import {UploadFileService} from "../../../../../Service/upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {CadastroRepresentante} from "../../../../../Service/cadastro-representante.service";
import {Representante} from "../../../../../Model/representante.interface";




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
  currentFileUpload!: File ;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  constructor(private uploadImageRep: CadastroRepresentante,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.representante = this.uploadImageRep.loadByID(this.id)
          .subscribe(() => {
            console.log();
          },
          (error) => {
            console.log("Agora pega o erro")
            console.log(error);
          });

        if (this.representante == null){
          this.router.navigate(['/Representante/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  change($event: Event) {
    this.changeImage = true;
  }

  changedImage(event: any) {
    this.selectedFile = event.target.files[0];
  }


  selectFile(event: any) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.foto = event.target.files[0];
      this.uploadImageRep.pushImage(this.foto, 2)
        .subscribe
        (
          (resposta) => {console.log('Upload ok.')},
          (error) => {alert('Falha ao enviar');console.log(error);}
        );
    }
    this.selectedFiles = event.target.files;
    this.preview(event);
  }

  upload() {

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



// upload() {
//   this.progress.percentage = 0;
//   this.currentFileUpload = <File>this.selectedFiles.item(0);
//   this.uploadImageRep.pushFileToStorage(this.currentFileUpload).subscribe(event => {
//       if (event.type === HttpEventType.UploadProgress) {
//         this.progress.percentage = Math.round(event.loaded);
//
//       } else if (event instanceof HttpResponse) {
//         alert('File Successfully Uploaded');
//       }
//       //this.selectedFiles = undefined;
//     }
//   );
// }

// downloadFile(){
//   const link = document.createElement('a');
//   link.setAttribute('target', '_blank');
//   link.setAttribute('href', '_File_Saved_Path');
//   link.setAttribute('download', 'file_name.pdf');
//   document.body.appendChild(link);
//   link.click();
//   link.remove();
// }
