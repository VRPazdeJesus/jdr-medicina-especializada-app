import { Component } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.page.html',
  styleUrls: ['./lista-medicos.page.scss'],
})
export class ListaMedicosPage {
  public vendedor:string;
  public codVendedor:string;
  public itens=[];
  public totalitens=[];

  constructor(private nav:NavController, private usersService: UsersService) {
    this.getDataVendedor();
    this.listaMedicos();
  }

  getDataVendedor(){
    this.vendedor = this.usersService.getVendedor();
    this.codVendedor = this.usersService.getCodVendedor();
  }

  listaMedicos(){
    this.usersService.listaMedicos(this.codVendedor).then((result:any) => {
      console.log('LISTA MEDICOS.TS', result);
      for(let doctors of result['medicos']){
        console.log('FOR LISTA MEDICOS TS',doctors);
        this.itens.push(doctors);
      }
      this.totalitens = this.itens;
    }).catch((error:any) => {
      console.log('ERRO HOME',error);
    }).finally(() => {
    });
  }

  voltar(){
      this.nav.navigateForward('/home');
  }

  proximo(){
    this.nav.navigateForward('tabs/tab3');
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
   
    if (val && val.trim() != '') {
      this.itens = this.itens.filter(term => {
        return term.Nome_Medico.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    } else{
      this.itens = this.totalitens;
    }
  }

}
