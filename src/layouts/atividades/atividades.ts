import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { ModalAtividadesComponent } from './components/modal-atividades/modal-atividades.component';

@Component({
  selector: 'atividades',
  templateUrl: 'atividades.html'
})

export class AtividadesPage {
  public segmentRoot: string = 'pendentes';
  public title = 'Atividades';
  public clients = [
    { nome: ' CONEXÃO LOCAL LTDA', endereco: ' Rua Fernando Lourenço,237 - 08320-420', tipo: 'Manutenção'},
    { nome: ' PAGAR ME LTDA', endereco: ' Rua Brigadeiro faria Lima Lourenço,237 - 08320-420', tipo: 'Instalação'},
    { nome: ' PADARIA CONEXAO LOCAL LTDA', endereco: ' Rua Fernando Lourenço,237 - 08320-420', tipo: 'Contrato'},
  ]

  constructor(public popoverCtrl: PopoverController) {}

  presentPopover() {
    let popover = this.popoverCtrl.create(ModalAtividadesComponent);
    popover.present();
  }
}
