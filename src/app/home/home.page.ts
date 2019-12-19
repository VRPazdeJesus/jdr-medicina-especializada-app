import { UsersService } from '../users.service';
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

  constructor(private nav:NavController, private toast:ToastController, private formBuilder:FormBuilder, private usersService: UsersService) {}

  ngOnInit(){
    this.validations_form=this.formBuilder.group({
      email:new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')  
      ])),
      password:new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6)
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
        message:'A senha deve ter no mínimo 6 caracteres'
      }
    ]

  }

  login(value){   
    this.usersService.login(value.email, value.password).then((result:any) => {

      console.log('RESULT SERVICE', result);
      

      for(let user of result['data']){
        console.log(user);
      }
      
      if(result['data'][0]['name'] == 'cerulean' && value.email == 'teste@jdr.com.br'){
        this.usersService.setVendedor(result['data'][0]['name']);
        this.nav.navigateForward('/lista-medicos');
      } else {
        this.presentToast();
      }
      this.cLogin="";
      this.cSenha="";
    }).catch((error:any) => {
      console.log('erro',error);
    }).finally(() => {
    });
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Login ou Senha Inválidos!',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}
