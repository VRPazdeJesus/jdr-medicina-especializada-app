import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.agendamento = 'Z11256';
    this.data = '01/02/2020';
    this.hora = '07:00';
    this.hospital = 'Hospital Santa Izabel';
    this.medico = 'Dr. Jack Tequila';
    this.convenio = 'Bradesco';
    this.paciente = 'Maria de Lourdes';
    this.cirurgia = 'ATJ';
  }

  ngOnInit() {
  }

}