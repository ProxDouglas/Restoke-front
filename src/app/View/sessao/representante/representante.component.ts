import {Component, Input, OnInit} from '@angular/core';
import {AuthRepresentanteService} from "../../../Service/auth/representante/auth-representante.service";
import {Representante} from "../../../Model/representante.interface";


@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit {

  representante!: Representante;

  constructor(private authService: AuthRepresentanteService) {

  }

  ngOnInit(): void {
    this.representante = this.authService.getPerfil() as Representante;
  }







}
