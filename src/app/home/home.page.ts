import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from  '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public cLogin:string;
  public cSenha:string;
  validations_form: FormGroup;

  constructor(private nav:NavController, private toast:ToastController, private formBuilder:FormBuilder) {}

  ngOnInit(){
    this.validations_form=this.formBuilder.group({
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')  
      ])),
      password:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(8)  
      ]))
    });
  }

  validation_messages = {
    'email':[
      {
        type:'required',
        message:'preenchimento do campo Login é obrigatório'
      },
      {
        type:'pattern',
        message:'Por favor, digite um email válido'
      }
    ],
    'password':[
      {
        type:'required',
        message:'Senha Obrigatória'
      },
      {
        type:'minlenght',
        message:'A senha deve ter no mínimo 8 caracteres'
      }
    ]

  }

  entrar(value){
    if(this.cLogin=="teste@jdr.com.br" && this.cSenha=="12345678"){
      console.log("ok")
      this.nav.navigateForward('/lista-medicos');
    }else{
      this.presentToast();
    }
    this.cLogin=""
    this.cSenha=""
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Login/Senha Inválidos!',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
