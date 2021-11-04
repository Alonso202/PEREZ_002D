import { Component, OnInit , ViewChild} from '@angular/core';
import { ServicesdatosService, Datos } from  'src/app/services/servicesdatos.service';
import { Platform, ToastController, IonList, NavController} from '@ionic/angular';
@Component({
  selector: 'app-form-foro',
  templateUrl: './form-foro.page.html',
  styleUrls: ['./form-foro.page.scss'],
})
export class FormForoPage implements OnInit {
  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  
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
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }
  Singup(){
    
  }

   //create
   addDatos(){
    
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('Publicación realizada con exito');
      this.loadDatos();
      this.navCtrl.navigateRoot('foro');
    });
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }
 
  } 

