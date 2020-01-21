import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { ListaMedicosPage } from './lista-medicos/lista-medicos.page';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public headers = new HttpHeaders();
  // public options = new RequestOptions({headers: this.headers}); 
  // private API_URL = 'http://reqres.in/api/';
  private API_URL = 'http://api.jdr.com.br/REST/';
  private codVendedor:string;
  private nomeVendedor:string;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'LOGINS')
        .subscribe((result: any) => {
          console.log('RESULT IN SERVICE',result);
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
  setCodVendedor(codVendedor:string) {
    this.codVendedor = codVendedor;
  }
  getCodVendedor(){
    return this.codVendedor;
  }
  setVendedor(nome:string) {
    this.nomeVendedor = nome;
  }
  getVendedor(){
    return this.nomeVendedor;
  }
  listaMedicos(codVendedor:string) {
    console.log('service vendedor', codVendedor);

    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'MEDICOS?CODVEND='+codVendedor)
        .subscribe((result: any) => {
          console.log('RESULT IN SERVICE',result);
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
}
