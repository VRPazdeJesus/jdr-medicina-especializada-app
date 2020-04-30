import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from  '@ionic/angular';

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

  constructor(private nav:NavController, private toast:ToastController) {
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
    if(this.isToggled) {
      this.presentToast('Salve o que escreveu antes de continuar','warning');
    } else {
      this.nav.navigateForward('/agenda');
    }
  }

  public proxima(){
    if(this.isToggled) {
      this.presentToast('Salve o que escreveu antes de continuar','warning');
    } else {
      this.nav.navigateForward('/lista-materiais');
    }
  }

  public salvar() {
    this.isToggled = false;
    this.presentToast('Mensagem salva com sucesso','success');
  }

  async presentToast(message:string, css:string) {
    const toast = await this.toast.create({
      message: message,
      color: css,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}