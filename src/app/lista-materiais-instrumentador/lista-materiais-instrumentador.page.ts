import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-lista-materiais-instrumentador',
  templateUrl: './lista-materiais-instrumentador.page.html',
  styleUrls: ['./lista-materiais-instrumentador.page.scss'],
})
export class ListaMateriaisInstrumentadorPage implements OnInit {

  public agendamento: string;
  public data: string;
  public hospital: string;
  public medico: string;
  public convenio: string;
  public paciente: string;
  public cirurgia: string;
  public conteudo = [
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:1}
  ];

  constructor(private nav:NavController) {
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

  public finalizar() {
    this.nav.navigateForward('/detalhe-cirurgia');
  }
}
