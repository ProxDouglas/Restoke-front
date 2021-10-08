import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File ): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:3000/savefile', data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(newRequest);
  }

  pushImage(foto: File){
    const formData = new FormData();
    formData.append('imagem', foto);

    this.http.post('http://localhost:3000/representante/{id}/image', formData)
      .subscribe(resposta => console.log('Upload ok.'));
  }



}
