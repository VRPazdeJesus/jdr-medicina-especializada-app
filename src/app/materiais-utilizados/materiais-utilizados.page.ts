import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-materiais-utilizados',
  templateUrl: './materiais-utilizados.page.html',
  styleUrls: ['./materiais-utilizados.page.scss'],
})
export class MateriaisUtilizadosPage implements OnInit {

  public txt:any;
  public hospital: string;
  public medico: string;
  public paciente: string;
  public conteudo = [
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'},
    {produto:'AR-6410',descricao:'EQUIPO PARA BOMA',qtd:'S700014235'}
  ];

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) {
    this.hospital = 'Lorem Ipsum Dolor';
    this.medico = 'Lorem Ipsum Dolor';
    this.paciente = "Lorem Ipsum Dolor";
  }

  readBarCode() {
    this.barcodeScanner.scan()
    .then(barcodeData => {
      this.txt = JSON.stringify(barcodeData);
      console.log('Barcode data', barcodeData);
      this.presentAlert();
     })
    .catch(err => {
      this.txt = err;
      console.log('Error', err);
      this.presentAlert();
     });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Produto Encontrado',
      subHeader: 'Nome do Produto',
      message: this.txt,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
