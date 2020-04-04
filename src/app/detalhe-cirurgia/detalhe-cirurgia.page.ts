import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-detalhe-cirurgia',
  templateUrl: './detalhe-cirurgia.page.html',
  styleUrls: ['./detalhe-cirurgia.page.scss'],
})
export class DetalheCirurgiaPage implements OnInit {

  public agendamento: string;
  public data: string;
  public hora: string;
  public hospital: string;
  public medico: string;
  public convenio: string;
  public paciente: string;
  public cirurgia: string;
  public isToggled: boolean;

  constructor(private nav:NavController) {
    this.agendamento = 'Z00000';
    this.data = '01/02/2020';
    this.hora = '07:00';
    this.hospital = 'Lorem Ipsum Dolor';
    this.medico = 'Lorem Ipsum Dolor';
    this.convenio = 'Lorem Ipsum';
    this.paciente = "Lorem Ipsum Dolor";
    this.cirurgia = 'Lorem ipsum';
    this.isToggled = false;
  }

  ngOnInit() {
  }

  public notify() {
    console.log("Toggled: "+ this.isToggled); 
  }

  public voltar(){
    this.nav.navigateForward('/calendario');
  }

}