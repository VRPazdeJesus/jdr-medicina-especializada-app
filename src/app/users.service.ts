import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ListaMedicosPage } from './lista-medicos/lista-medicos.page';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'https://reqres.in/api/'
  private vendedor:string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    console.log('email', email);
    console.log('senha', password);
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'login')
        .subscribe((result: any) => {
          resolve(result);
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
