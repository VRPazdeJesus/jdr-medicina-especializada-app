import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { ListaMedicosPage } from './lista-medicos/lista-medicos.page';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Accept': 'application/json',
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Origin': 'http://api.jdr.com.br:9010/',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
  //     })
  //   };
  public headers = new HttpHeaders();
  // public options = new RequestOptions({headers: this.headers}); 
  // private API_URL = 'http://reqres.in/api/';
  private API_URL = 'http://api.jdr.com.br/REST/';
  private vendedor:string;

  constructor(private http: HttpClient) {
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', 'http://api.jdr.com.br/');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  }

  login(email: string, password: string) {
    console.log('email', email);
    console.log('senha', password);
    return new Promise((resolve, reject) => {
      // let headers = this.headers
      this.http.get(this.API_URL + 'LOGINS')
        .subscribe((result: any) => {

          console.log('RESULT IN SERVICE',result);
          // resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
  setVendedor(vendedor:string) {
    this.vendedor = vendedor;
  }
  getVendedor(){
    return this.vendedor;
  }
  listaMedicos(vendedor:string) {
    console.log('service vendedor', vendedor);

    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'medicos')
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
}
