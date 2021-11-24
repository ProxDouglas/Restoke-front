import {Component, Input, OnInit} from '@angular/core';
import {AuthFornecedorService} from "../../../Service/auth/fornecedor/auth-fornecedor.service";
import {Fornecedor} from "../../../Model/fornecedor.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  fornecedor!: Fornecedor;

  constructor(private authService: AuthFornecedorService, private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.fornecedor = this.authService.getPerfil() as Fornecedor;
  }

  cadRep(){
    this.router.navigate(['cadastroRep'], {relativeTo: this.route});
  }


  associarRep() {

  }
}
