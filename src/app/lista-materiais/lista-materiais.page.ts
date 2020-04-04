import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-materiais',
  templateUrl: './lista-materiais.page.html',
  styleUrls: ['./lista-materiais.page.scss'],
})
export class ListaMateriaisPage implements OnInit {

  public agendamento: string;
  public data: string;
  public hospital: string;
  public medico: string;
  public convenio: string;
  public paciente: string;
  public cirurgia: string;

  constructor() {
    this.agendamento = 'Z00000';
    this.data = '01/02/2020';
    this.hospital = 'Lorem Ipsum Dolor';
    this.medico = 'Lorem Ipsum Dolor';
    this.convenio = 'Lorem Ipsum';
    this.paciente = "Lorem Ipsum Dolor";
    this.cirurgia = 'Lorem ipsum';
  }

  ngOnInit() {
  }

}
