import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InicioPage} from '../pages/inicio/inicio.page'
export interface Datos{

  titulo:string,
  tema:string,
  autor:string,
  mensaje:string,

}
export interface Usuarios
{
  nombre: string,
  email:string,
  direc:string,
  numTel:string,
  password:string
}
const ITEMS_KEY='my-datos';

@Injectable({
  providedIn: 'root'
})

export class ServicesdatosService {
  rootPage: InicioPage;
  private _storage : Storage;
  

  constructor(private storage: Storage) { 
    
    this.init();
   }

   //definimos en un método la creación del almacenamiento
  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  
  addDatos(dato: Datos):Promise<any>{
   return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      }else {
        return this.storage.set(ITEMS_KEY, [dato]);
      }

    })
  }
  addUsuarios(usuario: Usuarios):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((usuarios : Usuarios[])=>{
       if (usuarios) {
        usuarios.push(usuario);
         return this.storage.set(ITEMS_KEY, usuarios);
       }else {
         return this.storage.set(ITEMS_KEY, [usuario]);
       }
 
     })
   }

   //Nos permmite obtener la información almacenada en el storage 
   //por medio de sus keys 

   getDatos(): Promise<Datos[]>{
    return this.storage.get(ITEMS_KEY);
  }
  getUsuarios(): Promise<Usuarios[]>{
    return this.storage.get(ITEMS_KEY);
  }


}