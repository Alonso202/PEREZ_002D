import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.page.html',
  styleUrls: ['./reg-user.page.scss'],
})
export class RegUserPage implements OnInit {

  usuario = {
    email:'',
    password:'',
    numTel: '',
    direc:'',
    nombre:''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
