import { Component, OnInit } from '@angular/core';
import { CalAguaService } from 'src/app/services/cal-agua.service';
@Component({
  selector: 'app-noticias-agua',
  templateUrl: './noticias-agua.page.html',
  styleUrls: ['./noticias-agua.page.scss'],
})
export class NoticiasAguaPage implements OnInit {
  noticias
  constructor(public calAguaService:CalAguaService) { }

  ngOnInit() {
    this.calAguaService.obtenerDatos().subscribe(
      (data)=>{this.noticias = data;},
      (error)=>{console.log(error);}
    )
  }

}
