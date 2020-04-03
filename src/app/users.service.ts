import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public headers = new HttpHeaders();
  private API_URL = 'http://api.jdr.com.br/REST/';
  private codVendedor:string;
  private nomeVendedor:string;
  private nomeMedico:string;
  private codMedico:string;
  private codCotacao:string;

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
  setCodMedico(codMedico:string){
    this.codMedico = codMedico;
  }
  getCodMedico(){
    return this.codMedico;
  }
  setNomeMedico(nome:string) {
    this.nomeMedico = nome;
  }
  getNomeMedico(){
    return this.nomeMedico;
  }
  setCodCotacao(codCotacao:string){
    this.codCotacao = codCotacao;   
  }
  getCodCotacao(){   
    return this.codCotacao;
  }
  listaMedicos(codVendedor:string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'MEDICOS?CODVEND='+codVendedor)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
  getMedico() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'COTACOES?MEDICO='+this.codMedico)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
  getCotacao(){
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + 'DETCOT?COTACAO='+this.codCotacao)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
}
