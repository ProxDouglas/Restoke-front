import {Fornecedor} from "./fornecedor.interface";


export interface Produto {

  id: number ;
  nome: string;
  codigo_barra:string;
  descricao:string;
  categoria:string;
  imagens: File;
  fornecedor: number;

}
