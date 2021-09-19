import { Component } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] =[
    {
      icon: 'person-add-outline',
      name: 'Registro de Ususario', 
      redirecTo: '/reg-user'
    },
    {
      icon: 'water-outline', 
      name: 'Descripción', 
      redirecTo: '/descripcion'
    },
   
  ]
}
