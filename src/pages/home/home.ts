import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

	
	username:string;
	password:string;


  constructor(public navCtrl: NavController) {
		
  }
	goInicio(){
		//console.log("username: "+ this.username);
		//console.log("password: "+ this.password);
		this.navCtrl.push(InicioPage);
	}
	goRegister(){
		this.navCtrl.push(RegisterPage);
	}
	
}
