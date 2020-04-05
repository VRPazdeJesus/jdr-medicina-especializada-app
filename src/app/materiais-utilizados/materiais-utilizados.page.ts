import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiais-utilizados',
  templateUrl: './materiais-utilizados.page.html',
  styleUrls: ['./materiais-utilizados.page.scss'],
})
export class MateriaisUtilizadosPage implements OnInit {

  public hospital: string;
  public medico: string;
  public paciente: string;
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

  constructor() {
    this.hospital = 'Lorem Ipsum Dolor';
    this.medico = 'Lorem Ipsum Dolor';
    this.paciente = "Lorem Ipsum Dolor";
  }

  ngOnInit() {
  }

}
