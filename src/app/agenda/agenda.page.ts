import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  public vendedor: string;
  public data: string;
  public lastItem:any
  public conteudo = [
    {hora:'07:00',hospital:'COT',tipo:'LCA-BIO'},
    {hora:'07:30',hospital:'SEMED',tipo:'ATJ'},
    {hora:'08:00',hospital:'HOSPITAL ALIANÇA',tipo:'X-REAM'},
    {hora:'08:30',hospital:'COT',tipo:'LCA-BIO'},
    {hora:'09:00',hospital:'SEMED',tipo:'ATJ'},
    {hora:'09:30',hospital:'HOSPITAL ALIANÇA',tipo:'X-REAM'},
    {hora:'10:30',hospital:'HOSPITAL ALIANÇA',tipo:'X-REAM'}
  ];
  public totalConteudo = [
    {hora:'07:00',hospital:'COT',tipo:'LCA-BIO'},
    {hora:'07:30',hospital:'SEMED',tipo:'ATJ'},
    {hora:'08:00',hospital:'HOSPITAL ALIANÇA',tipo:'X-REAM'},
    {hora:'08:30',hospital:'COT',tipo:'LCA-BIO'},
    {hora:'09:00',hospital:'SEMED',tipo:'ATJ'},
    {hora:'09:30',hospital:'HOSPITAL ALIANÇA',tipo:'X-REAM'},
    {hora:'10:30',hospital:'HOSPITAL ALIANÇA',tipo:'X-REAM'}
  ];

  constructor(private nav:NavController) {
    this.vendedor = 'Lorem Ipsum Dolor';
    this.data = 'XX/XX/XXXX';
    this.lastItem = this.conteudo[this.conteudo.length - 1];
  }

  ngOnInit() {
  }

  onSearchTerm(ev: CustomEvent) {
    const val = ev.detail.value;
   
    if (val && val.trim() != '') {
      this.conteudo = this.conteudo.filter(term => {
        return term.hospital.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    } else{
      this.conteudo = this.totalConteudo;
    }
  }

  voltar(){
    this.nav.navigateForward('/calendario');
  }

  proximo(){
    this.nav.navigateForward('/detalhe-cirurgia');
  }

}
