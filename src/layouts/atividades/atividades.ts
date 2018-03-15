import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { FormAlmocarComponent } from './components/form-almocar/form-almocar.component';
import { FormOutrosComponent } from './components/form-outros/form-outros.component';
import { FormVoltarEmpresaComponent } from './components/form-voltar-empresa/form-voltar-empresa.component';
import { FormAbastecerComponent } from './components/form-abastecer/form-abastecer.component';

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

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  AbrirModalAlmocar() {
    this.navCtrl.push(FormAlmocarComponent);
  }

  AbrirModalAbastecer() {
    this.navCtrl.push(FormAbastecerComponent);
  }

  AbrirModalVoltarEmpresa() {
    this.navCtrl.push(FormVoltarEmpresaComponent);
  }

  AbrirModalOutros() {
    this.navCtrl.push(FormOutrosComponent);
  }
}
