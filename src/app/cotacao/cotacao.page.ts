import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.page.html',
  styleUrls: ['./cotacao.page.scss'],
})
export class CotacaoPage implements OnInit {

  public numCotacao = '';

  constructor(private nav:NavController, private usersService: UsersService) {
    this.numCotacao = this.usersService.getCodCotacao();  
    this.buscaCotacao();
  }

  public dados = [];

  buscaCotacao(){
    this.usersService.getCotacao().then((result:any) => {
      for(let cotacao of result['cotacoes']){
        this.dados.push(cotacao);
      }
    }).catch((error:any) => {
      console.log('ERRO HOME',error);
    }).finally(() => {
    });   
  }

  

  ngOnInit() {
  }

  voltar(){
    this.dados = []
    this.nav.navigateForward('medico');
  }

  salvar(){
    //aula criação de requisição post
  }
}
