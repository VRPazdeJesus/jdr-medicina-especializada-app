import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  public funcionario: string;

  constructor(private nav:NavController) {
    this.funcionario = "Fulano de Tal";
  }

  ngOnInit() {
  }

  voltar(){
    this.nav.navigateForward('/home');
  }

}
