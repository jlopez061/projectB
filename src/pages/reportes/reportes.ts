import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html',
})
export class ReportesPage {
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase, private alertCtrl: AlertController) {
    this.tasksRef = this.database.list('tasks');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportesPage');
  }

  createTask(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Nuevo Reporte',
      message: "Bienvenido al nuevo sistema de reportes, por favor llena con los datos veridicos",
      inputs: [
        {
          name: 'sNombre',
          placeholder: 'Escribe tu nombre completo'
        },
        {
          name: 'sTipe',
          placeholder: 'Que más pongo vats',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.tasksRef.push({
              sNombre: data.sNombre,
              sTipe: data.sTipe,
              done: false
            });
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

  updateTask( task ){
    this.tasksRef.update( task.key,{
      title: task.title,
      done: !task.done
    });
  }

  removeTask( task ){
    console.log( task );
    this.tasksRef.remove( task.key );
  }
}
