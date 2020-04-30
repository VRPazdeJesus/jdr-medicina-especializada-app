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
    //TESTE
    this.numCotacao = "XX/XX/XXXX";
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
      //TESTE
      this.dados = [
        {
          num_cotacao: "XX/XX/XXXX",
          emissao: "XXXXXXXX",
          cliente: "Lorem Ipsum Dolar",
          medico: "Lorem Ipsum Dolar",
          convenio: "Lorem Ipsum Dolar",
          data_cirurgia: "XX/XX/XXXX",
          valor_total: "XX.XXX,XX",
        }
      ]
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
