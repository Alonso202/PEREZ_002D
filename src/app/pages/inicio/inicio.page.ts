import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes : Componente[] =[
    {
      icon: 'paw-outline',
      name: 'RegistroUsusario', 
      redirecTo: '/reg-user'
    },
    {
      icon: 'sunny-outline', 
      name: 'Descripción', 
      redirecTo: '/descripcion'
    },
  

   
  ]


  constructor(private menuController: MenuController,public navCtrl : NavController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  cerrarSesion(){
    localStorage.removeItem('ingresado')
    this.navCtrl.navigateRoot('login');}
  }

