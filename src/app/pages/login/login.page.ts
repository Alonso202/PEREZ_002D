import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ServicesdatosService, Usuarios } from 'src/app/services/servicesdatos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario : Usuarios = <Usuarios>{};

  usuarios : Usuarios[] = [];
  email: string ='email';
  password: string='password'
  formularioLogin: FormGroup;
  constructor(private toastController: ToastController, private storageService: ServicesdatosService, private router : Router) { }

  ngOnInit() {
  }
  
  validar(){
    this.storageService.getUsuarios().then(usuarios=>{
      this.usuarios = usuarios; 

      if(this.usuarios===null){
        this.showToast('Datos usados incorrectos');
        this.usuario = <Usuarios>{};
        return console.log('usuario no registrado.');
      }

      for(let i = 0; i<=this.usuarios.length - 1 ; i++)
      {
        if(this.usuarios[i].email===this.usuario.email)
        {

          if(this.usuarios[i].password===this.usuario.password)
          {
            this.showToast('Bienvenid@ ' + this.capitalizar(this.usuarios[i].nombre)); 

            //Para el Guard Creo
            localStorage.setItem('ingresado','true')

            this.router.navigate(['inicio']); 
            this.usuario = <Usuarios>{};


            return console.log('Usuario Ingresado');
          }
          else{
            this.showToast('Datos usados incorrectos');
            this.usuario = <Usuarios>{};
            return console.log('Contraseña incorrecta');
          }
        }
      }

      this.usuario = <Usuarios>{};
      this.showToast('Datos usados incorrectos');
      return console.log('Usuario no existe');
    });
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
 
    async showToast(msg){
      const toast = await this.toastController.create({
        message: msg, 
        duration: 2000
      });
      toast.present();
    }
    capitalizar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }

