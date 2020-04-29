import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  public funcionario: string;
  public conteudo = [
    {data:'01/02/2020',qtd:12},{data:'02/02/2020',qtd:8},{data:'03/02/2020',qtd:14},{data:'04/02/2020',qtd:5},{data:'05/02/2020',qtd:7},
    {data:'06/02/2020',qtd:11},{data:'07/02/2020',qtd:9},{data:'08/02/2020',qtd:10},{data:'09/02/2020',qtd:10},{data:'10/02/2020',qtd:14}];

  constructor(private nav:NavController) {
    this.funcionario = "Fulano de Tal";
  }

  ngOnInit() {
  }

  voltar(){
    this.nav.navigateForward('/home');
  }

  proximo(){
    this.nav.navigateForward('/agenda');
  }

}
