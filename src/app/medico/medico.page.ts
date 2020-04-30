import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})
export class MedicoPage {

  public medico = '';
  public pacientes=[];
  public totalpacientes=[];
  public lastPacient:any;

  constructor(private nav:NavController, private usersService: UsersService) {
    //this.medico = this.usersService.getNomeMedico();
    this.buscaPaciente();
    //TESTE
    this.medico = "Lorem Ipsum Dolar";
  }

  buscaPaciente(){
    // this.usersService.getMedico().then((result:any) => {
    //   for(let cotacao of result['cotacoes']){
    //     this.pacientes.push(cotacao);
    //   }
    //   this.totalpacientes = this.pacientes;
    // }).catch((error:any) => {
    //   console.log('ERRO HOME',error);
    // }).finally(() => {
      
    // });

    //TESTE
    this.pacientes = [
      {status: 1, paciente: "Lorem Ipsum Dolar", cliente:"Lorem Ipsum Dolar", valor_total:"XX.XXX,XX", num_cotacao: "XX/XX/XXXX"},
      {status: 1, paciente: "Lorem Ipsum Dolar", cliente:"Lorem Ipsum Dolar", valor_total:"XX.XXX,XX", num_cotacao: "XX/XX/XXXX"},
      {status: 1, paciente: "Lorem Ipsum Dolar", cliente:"Lorem Ipsum Dolar", valor_total:"XX.XXX,XX", num_cotacao: "XX/XX/XXXX"},
      {status: 1, paciente: "Lorem Ipsum Dolar", cliente:"Lorem Ipsum Dolar", valor_total:"XX.XXX,XX", num_cotacao: "XX/XX/XXXX"}
    ];
    this.lastPacient = this.pacientes[this.pacientes.length - 1];
  }

  voltar(){
    this.nav.navigateForward('/lista-medicos');
  }

  proximo(codigo){   
    //this.usersService.setCodCotacao(codigo);
    this.nav.navigateForward('/cotacao');
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
   
    if (val && val.trim() != '') {
      this.pacientes = this.pacientes.filter(term => {
        return term.paciente.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    } else{
      this.pacientes = this.totalpacientes;
    }
  }

}
