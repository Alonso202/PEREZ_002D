import { Component, OnInit , ViewChild} from '@angular/core';
import { ServicesdatosService, Datos } from  'src/app/services/servicesdatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {
  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  
  @ViewChild('myList')myList :IonList; 
  

  constructor(private storageService: ServicesdatosService, 
    private plt: Platform, private toastController: ToastController) {
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
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
