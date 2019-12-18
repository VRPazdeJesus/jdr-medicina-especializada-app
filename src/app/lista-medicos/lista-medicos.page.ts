import { Component } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.page.html',
  styleUrls: ['./lista-medicos.page.scss'],
})
export class ListaMedicosPage {

  public funcionario:string;
  constructor(private nav:NavController, private usersService: UsersService) {
    this.funcionario = usersService.getVendedor();
    this.listaMedicos();
  }

  listaMedicos(){
    this.usersService.listaMedicos(this.funcionario);
  }

  voltar(){
      this.nav.navigateForward('/home');
  }

  proximo(){
    this.nav.navigateForward('tabs/tab3');
  }

  public itens=[
    {status:1,medico:'Pedro',cotacoes:1,especialidade:'Joelho'},
    {status:1,medico:'Antonio',cotacoes:3,especialidade:'Quadril'},
    {status:0,medico:'Joao Francisco',cotacoes:0,especialidade:'Joelho'},
    {status:1,medico:'Antonio Cesar',cotacoes:12,especialidade:'Ombro'},
    {status:1,medico:'Camila Goes',cotacoes:42,especialidade:'Joelho'},
    {status:0,medico:'Gustavo',cotacoes:0,especialidade:'Coluna'}
  ];

  public totalitens=[
    {status:1,medico:'Pedro',cotacoes:1,especialidade:'Joelho'},
    {status:1,medico:'Antonio',cotacoes:3,especialidade:'Quadril'},
    {status:0,medico:'Joao Francisco',cotacoes:0,especialidade:'Joelho'},
    {status:1,medico:'Antonio Cesar',cotacoes:12,especialidade:'Ombro'},
    {status:1,medico:'Camila Goes',cotacoes:42,especialidade:'Joelho'},
    {status:0,medico:'Gustavo',cotacoes:0,especialidade:'Coluna'}
  ];

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
   
    if (val && val.trim() != '') {
      this.itens = this.itens.filter(term => {
        return term.medico.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    } else{
      this.itens = this.totalitens;
    }
  }

}
