import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit , ViewChild} from '@angular/core';
import { ServicesdatosService, Usuarios } from 'src/app/services/servicesdatos.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { AlertController, IonList, NavController, Platform, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.page.html',
  styleUrls: ['./form-reg.page.scss'],
})
export class FormRegPage implements OnInit {
  newUsuario: Usuarios = <Usuarios>{};

  usuarios : Usuarios[] = [];

  @ViewChild('myList')myList :IonList; 
  

  constructor(private storageService: ServicesdatosService, 
    private plt: Platform, private toastController: ToastController, public navCtrl : NavController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  //get
  loadDatos(){
    this.storageService.getUsuarios().then(usuarios=>{
      this.usuarios=usuarios;
    });
  }
  Singup(){
    
  }

   //create
   addUsuarios(){
    
    this.storageService.addUsuarios(this.newUsuario).then(dato=>{
      this.newUsuario = <Usuarios>{};
      this.showToast('Usuario registrado con exito');
      this.loadDatos();
      this.navCtrl.navigateRoot('login');
    });
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }}
 