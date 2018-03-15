import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'concluidos',
  templateUrl: 'concluidos.html'
})
export class ConcluidosPage {

  public title: string = 'Atividades Concluídas';
  constructor(public navCtrl: NavController) {

  }

}
