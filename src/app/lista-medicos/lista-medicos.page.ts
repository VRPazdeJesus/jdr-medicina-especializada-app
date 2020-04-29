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
      for(let doctors of result['medicos']){
        this.itens.push(doctors);
      }
      this.totalitens = this.itens;
    }).catch((error:any) => {
      console.log('ERRO HOME',error);
    }).finally(() => {
      //TESTE
      this.itens = [
        {status: 1, Nome_Medico:'Lorem Ipsum Dolar', Total_Cotacoes: 2, Codigo:'Lorem Ipsum'},
        {status: 0, Nome_Medico:'Lorem Ipsum Dolar', Total_Cotacoes: 0, Codigo:'Lorem Ipsum'},
        {status: 1, Nome_Medico:'Lorem Ipsum Dolar', Total_Cotacoes: 1, Codigo:'Lorem Ipsum'}
      ]
    });
  }

  voltar(){
      this.nav.navigateForward('/home');
  }

  proximo(codigo, medico){
    this.usersService.setCodMedico(codigo);
    this.usersService.setNomeMedico(medico);
    this.nav.navigateForward('/medico');
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
